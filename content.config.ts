import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        date: z.date().optional()
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
        stacks: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.date().optional(),
        url: z.string().optional()
      })
    })
  }
})
