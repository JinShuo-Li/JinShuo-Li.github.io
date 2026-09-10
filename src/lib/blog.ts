import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export type Breadcrumb = { name: string; slug: string };

export type BlogNode = {
  /** Folder path, e.g. ["courses", "cs1602"]. Empty for the root. */
  path: string[];
  /** Slash-joined folder path, e.g. "courses/cs1602". Empty for the root. */
  slug: string;
  name: string;
  description: string;
  /** Sort weight from README frontmatter; Infinity when unset. */
  order: number;
  readme?: BlogEntry;
  articles: BlogEntry[];
  children: BlogNode[];
  /** Ancestor sections, excluding the root and the node itself. */
  ancestors: Breadcrumb[];
  /** Article count in this node and all descendants. */
  totalArticles: number;
};

/* ------------------------------------------------------------------ */
/* Entry helpers                                                       */
/* ------------------------------------------------------------------ */

function idSegments(entry: BlogEntry): string[] {
  return entry.id.replace(/\\/g, "/").split("/").filter(Boolean);
}

function baseName(entry: BlogEntry): string {
  const segments = idSegments(entry);
  return (segments[segments.length - 1] ?? entry.id).replace(/\.(md|mdx)$/i, "");
}

export function isCategoryReadme(entry: BlogEntry): boolean {
  return baseName(entry).toLowerCase() === "readme";
}

function folderOf(entry: BlogEntry): string[] {
  return idSegments(entry).slice(0, -1);
}

export function categoryOf(entry: BlogEntry): string {
  const segments = idSegments(entry);
  return (segments.length > 1 ? segments[0] : "misc").toLowerCase();
}

export function slugOf(entry: BlogEntry): string {
  return baseName(entry).toLowerCase();
}

function stripFrontmatter(body: string): string {
  return body.replace(/^\uFEFF?\s*---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

export function displayName(raw: string): string {
  return raw.replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function titleOf(entry: BlogEntry): string {
  const frontmatterTitle = entry.data.title?.trim();
  if (frontmatterTitle) return frontmatterTitle;

  const body = stripFrontmatter(entry.body ?? "");
  const heading = body.match(/^\s{0,3}#\s+(.+?)\s*$/m);
  if (heading) {
    return heading[1].replace(/#+\s*$/, "").trim();
  }

  return displayName(slugOf(entry));
}

export function descriptionOf(entry: BlogEntry): string {
  const frontmatterDescription = entry.data.description?.trim();
  if (frontmatterDescription) return frontmatterDescription;

  const body = stripFrontmatter(entry.body ?? "");
  const blocks = body.split(/\r?\n\s*\r?\n/);

  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;
    if (/^(#{1,6}\s|```|~~~|\||>|\$\$|[-*+]\s|\d+\.\s|<)/.test(block)) continue;
    if (/^!\[/.test(block) || /^\[!\[/.test(block)) continue;

    const text = block
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[`*_~#]/g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (text.length > 0) {
      return text.length > 220 ? `${text.slice(0, 217).trimEnd()}…` : text;
    }
  }

  return "";
}

export function dateOf(entry: BlogEntry): Date | null {
  return entry.data.date ?? null;
}

function orderOf(entry: BlogEntry): number {
  const value = entry.data.order;
  return typeof value === "number" ? value : Number.POSITIVE_INFINITY;
}

export function readingTimeOf(entry: BlogEntry): number {
  const body = stripFrontmatter(entry.body ?? "");
  const text = body.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ");
  const cjkPattern = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g;
  const cjkCount = (text.match(cjkPattern) ?? []).length;
  const latinWords = text
    .replace(cjkPattern, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = cjkCount / 400 + latinWords / 200;
  return Math.max(1, Math.round(minutes));
}

/* ------------------------------------------------------------------ */
/* Sorting                                                             */
/* ------------------------------------------------------------------ */

export function sortArticles(entries: BlogEntry[]): BlogEntry[] {
  return [...entries].sort((a, b) => {
    const aOrder = orderOf(a);
    const bOrder = orderOf(b);
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;

    const aTime = dateOf(a)?.getTime() ?? 0;
    const bTime = dateOf(b)?.getTime() ?? 0;
    if (bTime !== aTime) return bTime - aTime;

    return titleOf(a).localeCompare(titleOf(b));
  });
}

export async function getArticles(): Promise<BlogEntry[]> {
  const entries = await getCollection("blog", ({ data }) => data.draft !== true);
  return sortArticles(entries.filter((entry) => !isCategoryReadme(entry)));
}

export async function getRecentArticles(limit = 4): Promise<BlogEntry[]> {
  const entries = await getCollection("blog", ({ data }) => data.draft !== true);
  return entries
    .filter((entry) => !isCategoryReadme(entry))
    .sort((a, b) => {
      const aTime = dateOf(a)?.getTime() ?? 0;
      const bTime = dateOf(b)?.getTime() ?? 0;
      if (bTime !== aTime) return bTime - aTime;
      return titleOf(a).localeCompare(titleOf(b));
    })
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Section tree                                                        */
/* ------------------------------------------------------------------ */

function emptyNode(path: string[]): BlogNode {
  return {
    path,
    slug: path.join("/"),
    name: displayName(path[path.length - 1] ?? "Blog"),
    description: "",
    order: Number.POSITIVE_INFINITY,
    articles: [],
    children: [],
    ancestors: [],
    totalArticles: 0,
  };
}

function buildTree(entries: BlogEntry[]): BlogNode {
  const root = emptyNode([]);
  root.name = "Blog";

  const nodes = new Map<string, BlogNode>([["", root]]);
  const ensure = (path: string[]): BlogNode => {
    const key = path.join("/");
    const existing = nodes.get(key);
    if (existing) return existing;
    const parent = ensure(path.slice(0, -1));
    const node = emptyNode(path);
    parent.children.push(node);
    nodes.set(key, node);
    return node;
  };

  for (const entry of entries) {
    const node = ensure(folderOf(entry));
    if (isCategoryReadme(entry)) {
      node.readme = entry;
      node.name = entry.data.title?.trim() || displayName(node.path[node.path.length - 1] ?? "Blog");
      node.description = descriptionOf(entry);
      node.order = orderOf(entry);
    } else {
      node.articles.push(entry);
    }
  }

  const finalize = (node: BlogNode, ancestors: Breadcrumb[]) => {
    node.articles = sortArticles(node.articles);
    node.children.sort((a, b) => {
      if (a.order !== b.order) return a.order < b.order ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    node.ancestors = ancestors;
    node.children.forEach((child) =>
      finalize(child, [
        ...ancestors,
        ...(node.slug ? [{ name: node.name, slug: node.slug }] : []),
      ]),
    );
    node.totalArticles =
      node.articles.length + node.children.reduce((sum, child) => sum + child.totalArticles, 0);
  };

  finalize(root, []);
  return root;
}

export async function getTree(): Promise<BlogNode> {
  const entries = await getCollection("blog", ({ data }) => data.draft !== true);
  return buildTree(entries);
}

export function findSection(tree: BlogNode, slug: string): BlogNode | undefined {
  if (tree.slug === slug) return tree;
  for (const child of tree.children) {
    const found = findSection(child, slug);
    if (found) return found;
  }
  return undefined;
}

/* ------------------------------------------------------------------ */
/* URLs                                                                */
/* ------------------------------------------------------------------ */

export function articlePath(entry: BlogEntry): string {
  return `/blog/${entry.id}/`;
}

export function sectionPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function categoryPath(slug: string): string {
  return sectionPath(slug);
}

export function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatMonthYear(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

/** Split a section name like "CS1602 — Introduction to Computing" into its code and title. */
export function splitSectionName(name: string): { code: string; title: string } {
  const separator = name.indexOf(" — ");
  if (separator > 0) {
    return { code: name.slice(0, separator).trim(), title: name.slice(separator + 3).trim() };
  }
  return { code: name.trim(), title: "" };
}
