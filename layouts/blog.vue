<template>
    <DefaultNavbar :content-height="contentHeight" />
    <b-div ref="content">
        <slot />
    </b-div>
    <Footer />
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
    title: t('blog.page.title'),
    ogTitle: t('blog.page.title'),
    description: t('blog.page.description'),
    ogDescription: t('blog.page.description')
})

const content = useTemplateRef('content')
const { height: contentHeight } = useElementSize(content)
</script>