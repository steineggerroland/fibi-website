import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection(
            asSitemapCollection({
                type: 'page',
                source: {
                    include: '*/**.md',
                    exclude: ['*/blog/**']
                },
                schema: z.object({
                    title: z.string(),
                    description: z.string(),
                    author: z.string()
                }),
            })
        ),
        blog: defineCollection(
            // adds the robots frontmatter key to the collection
            asSitemapCollection({
                type: 'page',
                source: '*/blog/*.md',
                schema: z.object({
                    tags: z.array(z.string()),
                    title: z.string(),
                    description: z.string(),
                    author: z.string(),
                    date: z.date()
                }),
            })
        )
    },
})
