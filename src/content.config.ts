import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.string(),
    subcategory: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).min(1),
    images: z.array(image()).min(1),
    features: z.array(z.string()),
    specifications: z.record(z.string()),
    applications: z.array(z.string()).min(1),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    featured: z.boolean().default(false)
  })
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    pubDate: z.string(),
    author: z.string().default("Virag Trading Team"),
    coverImage: image().optional(),
    coverImageAlt: z.string().optional(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    featuredImage: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = {
  'products': productsCollection,
  'blog': blogCollection,
};
