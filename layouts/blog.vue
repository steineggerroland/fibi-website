<template>
    <NavbarContainer :content-height="contentHeight" />
    <b-div ref="content">
        <slot />
    </b-div>
    <Footer />
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Niva Blog – Gentle Tools & Guidance to Help You Organize Yourself',
    description: 'Discover blog posts designed for neurodivergent minds. From soft routines to executive function tips, Niva helps you organize yourself with care and clarity.'
})

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

<style scoped lang="scss">
#top-of-site-indicator-pixel {
    position: absolute;
    width: 1px;
    height: 1px;
    top: 90vh;
    left: 0;
    background-color: transparent;
    z-index: -1;
}
</style>