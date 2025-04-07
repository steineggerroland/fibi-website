<template>
  <section class="blog-index">
    <b-h level="1">{{ t('blog.overview.title') }}</b-h>
    <b-p>{{ t('blog.overview.description') }}</b-p>

    <!-- Tag filter -->
    <b-div v-if="allTags.length > 0" margin="b-4">
      <b-h level="3" text-color="secondary" margin="b-2">{{ t('blog.overview.filter-by-tag') }}</b-h>
      <b-div flex flex-wrap="wrap" gap="1">
        <NuxtLink
          :to="{path: localePath('/blog'), query: {tag: null}}"
          padding="0"
          margin="0"
        >
        <Badge :color="!selectedTag ? 'primary' : 'secondary'" padding="y-1 x-2" rounded>{{ t('blog.overview.all-posts') }}</Badge>
        </NuxtLink>
        <NuxtLink
          v-for="tag in allTags" 
          :key="tag" 
          :to="{path: localePath('/blog'), query: {tag: tag}}"
        >
        <Badge :color="selectedTag === tag ? 'primary' : 'secondary'" padding="y-1 x-2" rounded>
          {{ tag }}
        </Badge>
        </NuxtLink>
      </b-div>
    </b-div>

    <b-div v-if="pending">{{ t('blog.overview.loading') }}</b-div>
    <b-div v-else-if="error">{{ t('blog.overview.error', { error }) }}</b-div>
    <b-div v-else-if="!filteredPosts || filteredPosts.length === 0">{{ t('blog.overview.no-posts') }}</b-div>
    <b-div v-else>
      <b-div v-for="post in filteredPosts" :key="post._path" shadow="sm" padding="3" margin="b-3" rounded background-color="info-subtle">
        <NuxtLink :to="localePath(post._path)">
          <b-h level="2" margin="b-1">{{ post.title }}</b-h>
          <b-p text-color="secondary">{{ post.description }}</b-p>
          <b-div v-if="post.tags && post.tags.length" margin="t-2">
            <Badge v-for="(tag) in post.tags" :key="tag" color="secondary" padding="y-1 x-2" rounded margin="e-1">
              {{ tag }}
          </Badge>
          </b-div>
        </NuxtLink>
      </b-div>
    </b-div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { locale, t } = useI18n()
useSeoMeta({
    title: t('blog.page.title'),
    ogTitle: t('blog.page.title'),
    description: t('blog.page.description'),
    ogDescription: t('blog.page.description')
})

const route = useRoute()
const localePath = useLocalePath()

// Get tag from URL query parameter
const selectedTag = ref<string | null>(null)

// Update selected tag from URL
const updateSelectedTagFromUrl = () => {
  const tagParam = route.query.tag
  selectedTag.value = tagParam ? String(tagParam) : null
}

// Initialize selected tag from URL
updateSelectedTagFromUrl()

// Watch for route changes to update selected tag
watch(() => route.query.tag, () => {
  updateSelectedTagFromUrl()
})


const { data: posts, pending, error } = await useAsyncData('blog', async () => {
  try {
    // Query only posts for the current language
    const result = await queryContent('blog')
      .where({ _path: { $regex: `^/blog/${locale.value}/` } })
      .sort({ date: -1 })
      .find()
    return result || [] // Ensure we always return an array
  } catch (e) {
    console.error('Error fetching blog posts:', e)
    return [] // Return empty array on error
  }
})

// Get all unique tags
const allTags = computed(() => {
  if (!posts.value || !Array.isArray(posts.value)) return []
  
  const tags = new Set<string>()
  posts.value.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag))
    }
  })
  
  return Array.from(tags).sort()
})

// Filter posts by selected tag
const filteredPosts = computed(() => {
  if (!posts.value || !Array.isArray(posts.value)) return []
  
  if (!selectedTag.value) {
    return posts.value
  }
  
  return posts.value.filter(post => {
    if (!post.tags || !Array.isArray(post.tags)) return false
    return post.tags.includes(selectedTag.value)
  })
})
</script>

<style scoped>
/* Only keeping styles that Bootstrap Vue doesn't provide */
.blog-index :deep(a) {
  text-decoration: none;
  color: inherit;
}
</style>