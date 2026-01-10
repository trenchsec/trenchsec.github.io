import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Chloe Obermeyer'),
    tags: z.array(z.string()).default([]),
    category: z.enum(['journey', 'writeups', 'tutorial', 'research', 'tools']).default('journey'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
