# AGENTS.md

Instructions for agents working in this repository. The owner writes posts and
sends them to the agent; the agent places them in the correct location, fills in
the metadata, builds, and deploys. Keep changes small and do not refactor the
site unless explicitly asked.

## Project

- Astro 5 static site for the user GitHub Pages site `JinShuo-Li.github.io`.
- Deployed at the domain root (`site: https://JinShuo-Li.github.io`, `base: /`).
- Content lives in the top-level `blog/` folder, outside `src/`.
- Deployment is automatic on push to `main` via `.github/workflows/deploy.yml`.

Commands:

```bash
npm install        # once
npm run dev        # local dev server
npm run build      # production build into dist/
npm run check      # astro type/diagnostics check
```

`dist/`, `.astro/`, and `node_modules/` are gitignored. Never commit them.
If local content looks stale after adding or deleting files, clear the cache:
`rm -rf .astro node_modules/.astro`.

## Blog content model

```
blog/
  README.md                 (optional site-wide notes)
  <section>/                any folder under blog/ is a section
    README.md               section intro (name, description, order)
    <article>.md            one article
    <course>/               sections can nest (Blog -> Courses -> Course -> Topic)
      README.md             course intro
      <topic>.md            course note
```

Rules:

- Every folder under `blog/` is a section. Nesting is allowed and generic.
- `README.md` in a folder is that section's introduction. It also supplies the
  section name (its `title`) and description used in the UI.
- Every other `.md` file is an article.
- Each article's section is inferred from its parent folder; the slug is the
  filename without the extension.
- Routes are generated automatically:
  - section: `/blog/<folder path>/`
  - article: `/blog/<folder path>/<slug>/`
- Never edit navigation or article lists by hand; lists and routes are generated.

Current sections: `essays` (personal essays) and `courses` (nested course notes:
`cs1602`, `math1203`, `math1204`).

## Frontmatter reference

All fields are optional, but articles should normally set `title`, `date`, and
`tags`. Course notes also set `order`.

| Field          | Type       | Purpose |
| -------------- | ---------- | ------- |
| `title`        | string     | Original title. Shown on the article page. May be any language. |
| `displayTitle` | string     | English title used only in index/list/archive/prev-next UI. Required when `title` is not English. |
| `description`  | string     | English one-line summary. Used for SEO meta and as the course short description. |
| `date`         | `YYYY-MM-DD` | Publication date. Used for essay ordering and month-year display. |
| `order`        | number     | Position within a section. Used for course note ordering. |
| `tags`         | string[]   | Short English tags shown on the article page. |
| `draft`        | boolean    | `true` hides the entry from the build. |

Fallbacks when a field is omitted: article title from the first `# H1` then the
filename; description from the first paragraph. Index UIs use
`displayTitle` first, then `title`.

Example article:

```markdown
---
title: 悼词
displayTitle: "Elegy"
description: A prose eulogy written in late spring.
date: 2026-04-30
tags: [Essay, Eulogy]
---

# 悼词

Body text. Math uses $inline$ and `$$` blocks. Code uses fenced blocks.
```

## UI language rule

- All interface/chrome text is **English**: navigation, breadcrumbs, buttons,
  labels, counts, course names, project labels, Previous/Next, index/list/archive
  titles, and tags.
- Article **content** keeps its original language. Chinese essay titles and
  bodies stay Chinese.
- Therefore: give every non-English article an English `displayTitle`, and write
  `description` and `tags` in English. Do not translate or rewrite the body.

## Default workflow: adding a post

When the owner sends a post (text or Markdown), do the following without asking
for confirmation unless something is genuinely ambiguous.

1. **Choose the section.**
   - Personal essays / reflections / commentary -> `blog/essays/`.
   - Notes for an existing course -> `blog/courses/<course>/` where `<course>` is
     the existing folder (e.g. `cs1602`, `math1203`, `math1204`).
   - A new subject that is not an essay and not an existing course -> create a new
     top-level section folder, or ask which existing section fits.
2. **Create the file** at `blog/<section>/<slug>.md`.
   - Slug: lowercase, ASCII, hyphenated, descriptive (e.g. `tangled-roots`).
   - Preserve the post's original text as the body. Do not summarize.
3. **Write the frontmatter.**
   - `title`: the original title. If the post has no title, use its first `# H1`.
   - `displayTitle`: English title, **required if `title` is not English**.
     Otherwise omit it.
   - `description`: a concise English one-liner drawn from the content.
   - `date`: the date stated in the post, otherwise today's date.
   - `tags`: 1-3 short English tags.
   - `order`: only for course notes; use the next integer in that course.
4. **Markdown and math.** Keep paragraphs separated by blank lines. Use `$...$`
   for inline math and put display math on its own lines:
   ```
   $$
   E = mc^2
   $$
   ```
   Do not write `$$...$$` on a single line, and do not put `\begin{...}` on the
   same line as `$$`. Prefer `\begin{aligned}`/`\begin{cases}` inside a block.
   Use fenced code blocks with a language identifier (`python`, `bash`, `cpp`).
5. **Attribution (courses only).** Course subjects are the owner's own notes.
   Keep the course `README.md` line linking to
   `https://github.com/JinShuo-Li/Courses`. Do not add attribution inside every
   article.
6. **Validate.** Run `npm run check` and `npm run build`. Confirm the new article
   route exists under `dist/blog/...`, math and code render, and existing pages
   still build.
7. **Commit and push.**
   ```bash
   git add blog/...
   git commit -m "content(<section>): add <short title>"
   git push origin main
   ```
   Pushing to `main` triggers the GitHub Pages deployment. See Git rules below.

## Adding a new category (top-level section)

1. Create `blog/<category>/README.md` with frontmatter:

   ```markdown
   ---
   title: Category name
   description: One-line English description.
   order: 2
   ---

   Short English introduction, or omit the body.
   ```

   `order` controls where the section appears relative to other top-level
   sections (`Courses` is `1`, `Essays` has no order and sorts later).
2. Add articles directly under `blog/<category>/`.
3. The section and its articles appear automatically on `/blog/` and in the nav.

## Adding a new course

Courses live under `blog/courses/<course>/`.

1. Create `blog/courses/<course>/README.md`:

   ```markdown
   ---
   title: CODE — English Course Name
   description: One-line English description shown on the courses index.
   order: 4
   ---

   Personal course notes. They are **not official course materials**; the source
   archive is kept at [JinShuo-Li/Courses](https://github.com/JinShuo-Li/Courses).
   ```

   - `order` places the course within the `Courses` section.
   - The UI splits `title` on `" — "` into a code (`CODE`) and a title.
2. Add one article per conceptual topic with `order: 1, 2, 3, ...`. Ordered
   sections render as a numbered index, so keep the numbers sequential and
   meaningful (the intended learning order).
3. Do not create one giant article per source file. Split by topic.

## Validation checklist

Before finishing any content change:

- [ ] `npm run check` passes (0 errors).
- [ ] `npm run build` succeeds.
- [ ] New routes exist: `find dist/blog -name index.html`.
- [ ] Math and code blocks render (no `katex-error` in `dist/`).
- [ ] Index/UI pages contain no Chinese: inspect `/blog/`, `/blog/essays/`,
      `/blog/courses/`, each course page, and `/projects/`. Only article content
      pages may contain Chinese.
- [ ] Existing essays, course notes, projects, and the homepage still build.
- [ ] `git status` is clean after committing.

Quick check for Chinese in a built page:

```bash
node -e 'const s=require("fs").readFileSync("dist/blog/index.html","utf8")
  .replace(/<script[\s\S]*?<\/script>/g," ").replace(/<[^>]+>/g," ");
  console.log((s.match(/[\u4e00-\u9fff]{2,}/g)||[]).join(" | ")||"(none)")'
```

## Git and deployment rules

- Make small, atomic Conventional Commits after each coherent stage, e.g.
  `content(essays): add <title>`, `content(cs1602): add <topic> notes`,
  `feat(blog): ...`, `fix(ui): ...`.
- Never include `Co-authored-by`, AI/model attribution, or generated-by trailers.
- Commit only the files changed for that stage. Do not commit `dist/`,
  `node_modules/`, or `.astro/`.
- Push with `git push origin main`. The GitHub Actions workflow builds and
  deploys automatically; do not deploy by hand.
- Do not commit unless the owner asks, unless the task explicitly is to publish
  content. When asked to publish, commit and push.

## Do not

- Do not redesign the site, change the palette, or edit unrelated files for a
  content update.
- Do not translate or rewrite existing article bodies.
- Do not invent facts, dates, tags, or metadata that are not supported by the
  post or existing content.
- Do not hand-edit generated lists, navigation, or routes.
- Do not add filler copy, marketing text, or decorative cards to fill space.
- Do not remove or "clean up" existing content unless asked.
