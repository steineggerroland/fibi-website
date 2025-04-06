<template>
  <ContentDoc v-slot="{ doc }" :path="contentPath">
    <Container margin="t-4">
      <Row>
        <Col>
        <article class="blog-post">
          <NuxtLink :to="localePath('/blog')">
            <b-button margin="b-4" color="outline-secondary">
              <b-span class="back-icon" margin="e-2">←</b-span> {{ t('blog.post.back-to-blog') }}
            </b-button>
          </NuxtLink>
          <b-div v-if="doc">
            <b-h level="1">{{ doc.title }}</b-h>
            <!-- Meta information -->
            <b-div text-color="secondary">
              <b-span v-if="doc.author" margin="e-2">
                <b-span class="font-semibold">{{ t('blog.post.author') }}</b-span> {{ doc.author }}
              </b-span>
              <b-span v-if="doc.date" margin="e-2">
                <b-span class="font-semibold">{{ t('blog.post.published') }}</b-span> {{ formatDate(doc.date) }}
              </b-span>
              <b-div v-if="doc.tags && doc.tags.length" margin="b-2">
                <NuxtLink v-for="(tag, _) in doc.tags" :key="tag" :to="localePath(`/blog?tag=${tag}`)"
                  class="tag-link">
                  <Badge color="primary" padding="y-1 x-2" rounded margin="e-1">
                    {{ tag }}
                  </Badge>
                </NuxtLink>
              </b-div>
            </b-div>
            <b-p text-color="secondary" margin="b-5">{{ doc.description }}</b-p>
            <ContentRenderer :value="doc" />
          </b-div>
          <b-div v-else>
            <b-h level="1">{{ t('blog.post.post-not-found') }}</b-h>
            <NuxtLink :to="localePath('/blog')">{{ t('blog.post.back-to-blog') }}</NuxtLink>
          </b-div>
        </article>
        </Col>
        <Col display="none xl-block" col="4" ref="sidebar-container">
        <b-div fixed="top" ref="sidebar" style="width: 0; overflow: hidden; z-index: 1">
          <b-div margin="b-4" shadow="sm" padding="2" border border-color="dark-subtle" rounded background-color="info-subtle">
            <b-div class="sidebar-section">
              <b-h level="3" class="text-lg font-semibold" margin="b-3">{{ t('blog.post.related-articles') }}</b-h>
              <b-ul class="related-articles">
                <b-li v-for="article in relatedArticles" :key="article._path" margin="b-2">
                  <NuxtLink :to="article._path" class="text-blue-600 hover:text-blue-800">
                    {{ article.title }}
                  </NuxtLink>
                </b-li>
              </b-ul>
            </b-div>
          </b-div>
          <b-div shadow="sm" padding="2" radius="md" border border-color="dark-subtle" rounded background-color="info-subtle">
            <b-div class="sidebar-section" margin="t-6">
              <b-h level="3" class="text-lg font-semibold" margin="b-3">{{ t('blog.post.popular-tags') }}</b-h>
              <b-div flex flex-wrap="wrap" gap="2">
                <NuxtLink v-for="tag in allTags" :key="tag" :to="localePath(`/blog?tag=${tag}`)">
                  <Badge :color="doc?.tags.includes(tag) ? 'primary' : 'secondary'" padding="y-1 x-2" rounded>
                    {{ tag }}
                  </Badge>
                </NuxtLink>
              </b-div>
            </b-div>
          </b-div>
        </b-div>
        </Col>
      </Row>
    </Container>
  </ContentDoc>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'blog'
})

const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Compute the correct content path based on the URL structure
const contentPath = computed(() => {
  const slugParts = route.params.slug as string[]
  
  // Handle case where slugParts might not be an array
  if (!Array.isArray(slugParts)) {
    console.error('Expected slugParts to be an array, got:', slugParts)
    return `/blog/${locale.value}`
  }
  
  // If the slug is just 'index', redirect to blog
  if (slugParts.length === 1 && slugParts[0] === 'index') {
    return `/blog/${locale.value}`
  }
  
  // Get all available locale codes
  const availableLocales = locales.value.map(l => typeof l === 'string' ? l : l.code)
  // If the first part of the slug is a locale, use it
  // Otherwise, use the current locale
  const contentLocale = availableLocales.includes(slugParts[0]) ? slugParts[0] : locale.value
  const contentSlug = availableLocales.includes(slugParts[0]) ? slugParts.slice(1) : slugParts
  
  // Ensure contentSlug is an array before joining
  if (!Array.isArray(contentSlug)) {
    console.error('Expected contentSlug to be an array, got:', contentSlug)
    return `/blog/${contentLocale}`
  }
  
  // For prerender, only handle specific paths
  if (process.server) {
    const path = `/blog/${contentLocale}/${contentSlug.join('/')}`
    // Check if this is a valid content path
    try {
      const content = queryContent(path).findOne()
      if (!content) {
        console.warn(`No content found for path: ${path}`)
        return `/blog/${contentLocale}`
      }
    } catch (e) {
      console.error(`Error checking content path: ${path}`, e)
      return `/blog/${contentLocale}`
    }
  }
  
  return `/blog/${contentLocale}/${contentSlug.join('/')}`
})

// Fetch all blog posts for related articles
const { data: allPosts } = await useAsyncData('all-blog-posts', async () => {
  try {
    // During prerendering, return empty array to avoid content API errors
    if (process.server && process.env.NITRO_PRESET === 'static') {
      console.log('Prerendering detected, returning empty posts array')
      return []
    }
    
    return await queryContent(`blog/${locale.value}`)
      .where({ _path: { $ne: `/blog/${locale.value}` } })
      .find()
  } catch (e) {
    console.error('Error fetching blog posts:', e)
    return []
  }
})

// Get related articles based on tags
const relatedArticles = computed(() => {
  if (!allPosts.value) return []
  // Return up to 3 articles
  return allPosts.value.sort(() => Math.random() - 0.5).slice(0, 3)
})

// Get all unique tags
const allTags = computed(() => {
  if (!allPosts.value) return []

  const tags = new Set<string>()
  allPosts.value.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag))
    }
  })
  return tags
})

// Format date
const formatDate = (dateString: string) => {
  if (!dateString) return ''

  const date = new Date(dateString)
  return date.toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}


const sidebarContainer = useTemplateRef('sidebar-container')
const { x: sidebarContainerX, y: sidebarContainerY, width: sidebarContainerWidth } = useElementBounding(sidebarContainer)


const sidebar = useTemplateRef('sidebar')

watch([sidebarContainerX, sidebarContainerY, sidebarContainerWidth], ([x, y, w]) => {
  sidebar.value!.$el.style.left = `${x}px`
  sidebar.value!.$el.style.width = `${w}px`
  sidebar.value!.$el.style.top = `${window.scrollY + y}px`
})


// Set up SEO metadata
useHead(() => ({
  title: t('blog.organize-yourself.title'),
  meta: [
    {
      name: 'description',
      content: t('blog.organize-yourself.description')
    }
  ]
}))
</script>

<style scoped>
.meta-info {
  font-size: 0.9rem;
}

:deep(h2) {
  @apply text-2xl font-semibold mt-8 mb-4;
}

:deep(p) {
  @apply mb-4 leading-relaxed;
}

:deep(ul) {
  @apply list-disc pl-6 mb-4;
}

:deep(li) {
  @apply mb-2;
}

:deep(a) {
  @apply text-blue-600 hover:text-blue-800 underline;
}
</style>