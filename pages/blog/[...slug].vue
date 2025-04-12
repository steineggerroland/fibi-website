<template>
  <Container margin="t-4 b-5">
    <Row>
      <Col>
      <article class="blog-post">
        <NuxtLink :to="localePath('/blog')">
          <b-button margin="b-4" color="outline-secondary">
            <b-span class="back-icon" margin="e-2">←</b-span> {{ t('blog.post.back-to-blog') }}
          </b-button>
        </NuxtLink>
        <b-div v-if="status === 'pending'" margin="y-4">
          <b-spinner />
        </b-div>
        <b-div v-else-if="doc">
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
              <NuxtLink v-for="(tag, _) in doc.tags" :key="tag" :to="localePath(`/blog?tag=${tag}`)" class="tag-link">
                <Badge color="primary" padding="y-1 x-2" rounded margin="e-1">
                  {{ tag }}
                </Badge>
              </NuxtLink>
            </b-div>
          </b-div>
          <b-p text-color="secondary" margin="b-5">{{ doc.description }}</b-p>
          <ContentRenderer :value="doc" />
        </b-div>
        <b-div v-else margin="y-4">
          <b-h level="1">{{ t('blog.post.post-not-found') }}</b-h>
          <NuxtLink :to="localePath('/blog')">{{ t('blog.post.back-to-blog') }}</NuxtLink>
        </b-div>
      </article>
      </Col>
      <Col display="none xl-block" col="4" ref="sidebar-container">
      <b-div fixed="top" ref="sidebar" style="width: 0; overflow: hidden; z-index: 1">
        <b-div margin="b-4" shadow="sm" padding="2" border border-color="dark-subtle" rounded
          background-color="info-subtle">
          <b-div class="sidebar-section">
            <b-h level="3" class="text-lg font-semibold" margin="b-3">{{ t('blog.post.related-articles') }}</b-h>
            <b-ul class="related-articles">
              <b-li v-for="article in relatedArticles" :key="article.path" margin="b-2">
                <NuxtLink :to="article.path" class="text-blue-600 hover:text-blue-800">
                  {{ article.title }}
                </NuxtLink>
              </b-li>
            </b-ul>
          </b-div>
        </b-div>
        <b-div shadow="sm" padding="2" radius="md" border border-color="dark-subtle" rounded
          background-color="info-subtle">
          <b-div class="sidebar-section" margin="t-6">
            <b-h level="3" class="text-lg font-semibold" margin="b-3">{{ t('blog.post.popular-tags') }}</b-h>
            <b-div flex flex-wrap="wrap" gap="2">
              <NuxtLink v-for="tag in allTags" :key="tag" :to="localePath(`/blog?tag=${tag}`)">
                <Badge :color="doc?.tags?.includes(tag) ? 'primary' : 'secondary'" padding="y-1 x-2" rounded>
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
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { data: doc, status } = useAsyncData('blog-'+route.path, async () => {
  const doc = await queryCollection('blog').path(route.path).first()
  return doc
}, {
  watch: [route]
})

onBeforeMount(() => {
  useHead({
    title: doc?.value?.title,
    meta: [
      {
        name: 'description',
        content: doc?.value?.description
      }
    ]
  })
  useServerSeoMeta({
    title: doc?.value?.title,
    ogTitle: doc?.value?.title,
    description: doc?.value?.description,
    ogDescription: doc?.value?.description
  })
})

// Fetch all blog posts for related articles
const { data: allPosts } = useAsyncData('all-blog-posts', () => {
  return queryCollection('blog').where('path', 'LIKE', `/${locale.value}/%`).order('date', 'DESC').all()
}, {
  watch: [locale]
})

// Get related articles
const relatedArticles = computed(() => {
  if (!allPosts.value) return []
  // Return up to 3 articles
  return allPosts.value.filter(p => p.id !== doc.value?.id).sort(() => Math.random() - 0.5).slice(0, 3)
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