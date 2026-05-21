import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        date: z.date().optional(),
        sitemap: defineSitemapSchema()
      })
    }),
    project: defineCollection({
      type: 'page',
      source: 'project/*.md',
      schema: z.object({
        title: z.string(),
        color: z.string().optional(),
        description: z.string().optional(),
        collaborators: z.array(z.string()).optional(),
        status: z.enum(['soon', 'running']).optional(),
        stacks: z.array(z.string()).optional(),
        month: z.string().optional(),
        active: z.boolean().optional(),
        github_url: z.string().optional(),
        icon: z.string().optional(),
        image: z.string().optional(),
        date: z.date().optional(),
        url: z.string().optional(),
        sitemap: defineSitemapSchema()
      })
    })
  }
})
