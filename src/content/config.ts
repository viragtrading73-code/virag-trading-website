import { z, defineCollection } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    images: z.array(image()), // Uses astro:assets for internal images
    features: z.array(z.string()).optional(),
    specifications: z.record(z.string()).optional(),
    applications: z.array(z.string()).optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    whatsappMessage: z.string().optional(),
  })
});

export const collections = {
  'products': productsCollection,
};
