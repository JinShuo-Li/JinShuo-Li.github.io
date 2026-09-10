import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export type Category = {
  slug: string;
  name: string;
  description: string;
  readme?: BlogEntry;
  articles: BlogEntry[];
};

function idSegments(entry: BlogEntry): string[] {
  return entry.id.replace(/\\/g, "/").split("/").filter(Boolean);
}

export function isCategoryReadme(entry: BlogEntry): boolean {
  const segments = idSegments(entry);
  const last = (segments[segments.length - 1] ?? "")
    .replace(/\.(md|mdx)$/i, "")
    .toLowerCase();
  return last === "readme";
}

export function categoryOf(entry: BlogEntry): string {
  const segments = idSegments(entry);
  const folder = segments.length > 1 ? segments[0] : "misc";
  return folder.toLowerCase();
}

export function slugOf(entry: BlogEntry): string {
  const segments = idSegments(entry);
  const last = segments[segments.length - 1] ?? entry.id;
  return last.replace(/\.(md|mdx)$/i, "").toLowerCase();
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

export function readingTimeOf(entry: BlogEntry): number {
  const body = stripFrontmatter(entry.body ?? "");
  const text = body.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function sortArticles(entries: BlogEntry[]): BlogEntry[] {
  return [...entries].sort((a, b) => {
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
  const articles = await getArticles();
  return articles.slice(0, limit);
}

export async function getCategories(): Promise<Category[]> {
  const entries = await getCollection("blog", ({ data }) => data.draft !== true);
  const readmes = entries.filter((entry) => isCategoryReadme(entry));
  const articles = entries.filter((entry) => !isCategoryReadme(entry));

  const readmeByCategory = new Map<string, BlogEntry>();
  for (const readme of readmes) {
    readmeByCategory.set(categoryOf(readme), readme);
  }

  const articlesByCategory = new Map<string, BlogEntry[]>();
  for (const article of articles) {
    const category = categoryOf(article);
    if (!articlesByCategory.has(category)) articlesByCategory.set(category, []);
    articlesByCategory.get(category)!.push(article);
  }

  for (const readme of readmes) {
    const category = categoryOf(readme);
    if (!articlesByCategory.has(category)) articlesByCategory.set(category, []);
  }

  return [...articlesByCategory.entries()]
    .map(([slug, categoryArticles]) => {
      const readme = readmeByCategory.get(slug);
      return {
        slug,
        name: readme?.data.title?.trim() || displayName(slug),
        description: readme ? descriptionOf(readme) : "",
        readme,
        articles: sortArticles(categoryArticles),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function articlePath(entry: BlogEntry): string {
  return `/blog/${categoryOf(entry)}/${slugOf(entry)}/`;
}

export function categoryPath(slug: string): string {
  return `/blog/${slug}/`;
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
