import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog folder: /blog/<category>/<article>.md
// - each top-level folder under /blog is a category
// - README.md in a folder is the category introduction
// - every other .md file is an article
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog" }),
  schema: z.object({
    title: z.string().optional(),
    displayTitle: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
