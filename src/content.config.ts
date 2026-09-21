import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Optional basic fields
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Docs-specific fields
    order: z.number().optional(),
    section: z.string().optional(),

    // Optional basic fields (shared with blog)
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

/**
 * Articles Collection Schema
 * Structured for in-depth editorial, industry guides, technical telecom insights,
 * and SEO-optimized Schema.org Article / NewsArticle markup.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    // Core editorial metadata
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Author & Organization
    author: z.string().default('Net Express Team'),
    authorRole: z.string().optional(),
    authorAvatar: z.string().optional(),

    // Classification
    category: z.string().default('Telecom & Business IT'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Visuals
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    ogImage: z.string().optional(),

    // SEO & Structured Data
    schemaType: z.enum(['Article', 'NewsArticle', 'TechArticle', 'BlogPosting']).default('Article'),
    canonicalUrl: z.string().optional(),
    readingTime: z.string().optional(),
    toc: z.boolean().default(true),
  }),
});

/**
 * Service Areas Collection Schema
 * Tailored for programmatic local SEO and location landing pages across Michigan
 * (cities, counties, metro areas) with localized phone, service availability, and map/region data.
 */
const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/service-areas' }),
  schema: z.object({
    // Location Details
    name: z.string(), // e.g. "Clarkston", "Metro Detroit", "Oakland County"
    state: z.string().default('MI'),
    county: z.string().optional(), // e.g. "Oakland County"
    regionType: z.enum(['City', 'County', 'Metro Area', 'Region']).default('City'),
    zipCodes: z.array(z.string()).optional(),

    // Page Metadata & Headings
    title: z.string(), // e.g. "Business Phone, Internet & IT Services in Clarkston, MI"
    description: z.string(),
    headline: z.string().optional(),
    leadText: z.string().optional(),

    // Contact & Service Highlights
    localPhone: z.string().default('(248) 313-2300'),
    tollFreePhone: z.string().default('(855) 313-2300'),
    fiberAvailable: z.boolean().default(true),
    maxSpeed: z.string().default('5 Gbps'),
    deliveryTime: z.string().default('Rapid on-site installation'),
    primaryServices: z.array(z.string()).default([
      'Hosted VoIP Business Phone',
      'Dedicated Fiber Internet',
      'Virtual Fax (FaxBridge)',
      'Managed IT & Network Support',
      '5G Wireless Failover'
    ]),
    neighboringAreas: z.array(z.string()).optional(),

    // Geo & Coordinates for Schema.org LocalBusiness
    geoLat: z.number().optional(),
    geoLng: z.number().optional(),

    // Visual & State
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  docs,
  articles,
  serviceAreas,
};
