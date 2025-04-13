<template>
  <main>
      <article v-if="content">
        <Container margin="y-5">
          <Row>
            <Col col="12 md-10 lg-8" offset="md-1 lg-2">
            <Row margin="b-4">
              <b-h level="1">{{ content.title }}</b-h>
              <b-p text-color="secondary" emphasis>{{ content.description }}</b-p>
            </Row>
            <Row>
              <ContentRenderer :value="content" />
            </Row>
            </Col>
          </Row>
        </Container>
      </article>
      <Container v-else margin="y-5">
        <Row>
          <Col col="12 md-10 lg-8" offset="md-1 lg-2">
            <b-p level="1"><Spinner /></b-p>
          </Col>
        </Row>
      </Container>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const { locale } = useI18n()
const route = useRoute()
const { data: content } = useAsyncData(route.path, () => queryCollection('pages').path(route.path).first(), { watch: [locale] })
const updateSeo = (where: 'server' | 'client' = 'server') => {
  const useSeoFun = where === 'server' ? useServerSeoMeta : useSeoMeta
  useSeoFun({
    title: content.value?.title,
    description: content.value?.description,
    ogTitle: content.value?.title,
    ogDescription: content.value?.description,
  })
  useHead({
    title: content.value?.title,
    meta: [
      { name: 'description', content: content.value?.description }
    ]
  })
}
updateSeo()
watch(content, () => {
  updateSeo('client')
})

</script>
