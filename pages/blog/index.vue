<template>
  <section class="blog-index mt-3">
    <b-h level="1">{{ t('blog.overview.title') }}</b-h>
    <b-p v-if="route.query.missingarticle">
      <Alert color="warning" style="white-space: pre-line;">{{ t('blog.overview.missing-article', {
        article:
          route.query.missingarticle }) }}</Alert>
    </b-p>
    <b-p>{{ t('blog.overview.description') }}</b-p>

    <!-- Tag filter -->
    <b-div margin="b-4">
      <b-h level="3" text-color="secondary" margin="b-2">{{ t('blog.overview.filter-by-tag') }}</b-h>
      <b-div flex flex-wrap="wrap" gap="1" placeholder="wave">
        <NuxtLink :to="{ path: localePath('/blog'), query: { tag: null } }" padding="0" margin="0">
          <Badge :color="!selectedTag ? 'primary' : 'secondary'" padding="y-1 x-2" rounded>{{
            t('blog.overview.all-posts') }}</Badge>
        </NuxtLink>
        <NuxtLink v-if="allTags.length > 0" v-for="tag in allTags" :key="tag"
          :to="{ path: localePath('/blog'), query: { tag: tag } }">
          <Badge :color="selectedTag === tag ? 'primary' : 'secondary'" padding="y-1 x-2" rounded>
            {{ tag }}
          </Badge>
        </NuxtLink>
        <NuxtLink v-else v-for="i in 10" :key="i" padding="0" margin="0">
          <b-span placeholder color="secondary" padding="y-1 x-2" rounded :style="`width: ${42 + Math.floor(Math.random() * 42)}px; height:20px;`"></b-span>
        </NuxtLink>
      </b-div>
    </b-div>

    <b-div v-if="pending" margin="y-4">
      <b-div v-for="i in 4" :key="i" shadow="sm" padding="3" margin="b-3" rounded
        background-color="info-subtle" placeholder="wave">
        <NuxtLink>
          <b-h level="2" margin="b-1"><b-span placeholder col="4" rounded></b-span></b-h>
          <b-p text-color="secondary"><b-span placeholder col="8" style="height: 50px;" rounded></b-span></b-p>
          <b-div margin="t-2">
            <b-span v-for="j in 3" :key="j" placeholder color="secondary" padding="y-1 x-2" margin="e-1" rounded :style="`width: ${42 + Math.floor(Math.random() * 42)}px; height:20px;`"></b-span>
          </b-div>
        </NuxtLink>
      </b-div>
    </b-div>
    <b-div v-else-if="error" margin="y-4">{{ t('blog.overview.error', { error }) }}</b-div>
    <b-div v-else-if="!filteredPosts || filteredPosts.length === 0">{{ t('blog.overview.no-posts') }}</b-div>
    <b-div v-else>
      <b-div v-for="post in filteredPosts" :key="post.path" shadow="sm" padding="3" margin="b-3" rounded
        background-color="info-subtle">
        <NuxtLink :to="localePath(post.path)">
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
import { watchEffect } from 'vue'

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
const router = useRouter()
const localePath = useLocalePath()

// Get tag from URL query parameter
const selectedTag = computed(() => route.query.tag)

const posts = ref<any>()
const pending = ref(true)
const error = ref(false)
watchEffect(async () => {
  try {
    pending.value = true
    posts.value = await queryCollection('blog').where('path', 'LIKE', `/${locale.value}/%`).order('date', 'DESC').all()
    pending.value = false
  } catch (err) {
    error.value = true
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
watchEffect(() => {
  if (selectedTag.value && posts.value && !posts.value.map(p => p.tags).flat().includes(selectedTag.value)) {
    router.push(localePath('/blog'))
  }
})
</script>

<style scoped>
/* Only keeping styles that Bootstrap Vue doesn't provide */
.blog-index :deep(a) {
  text-decoration: none;
  color: inherit;
}
</style>