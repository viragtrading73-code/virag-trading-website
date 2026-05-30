import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    images: z.array(z.string()),
    features: z.array(z.string()),
    specifications: z.record(z.string()),
    applications: z.array(z.string()),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'products': productsCollection,
};
