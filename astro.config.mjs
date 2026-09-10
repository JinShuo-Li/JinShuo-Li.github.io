// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Drop a leading level-1 heading from rendered content. The title is shown by
// the page template, so repeating it as an H1 in the body would be redundant.
// This lets plain Markdown files use a single `# Title` line as their title.
function rehypeStripLeadingH1() {
  /** @param {any} tree */
  return (tree) => {
    const children = tree.children ?? [];
    for (const node of children) {
      if (node.type === "element") {
        if (node.tagName === "h1") children.splice(children.indexOf(node), 1);
        return;
      }
      if (node.type === "text" && node.value.trim() === "") continue;
      return;
    }
  };
}

// User GitHub Pages site: https://JinShuo-Li.github.io
export default defineConfig({
  site: "https://JinShuo-Li.github.io",
  base: "/",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeStripLeadingH1, rehypeKatex],
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
