<template>
    <b-h level="1">{{ $t('blog.organize-yourself.title') }}</b-h>
    <b-p>{{ $t('blog.organize-yourself.intro') }}</b-p>

    <b-h level="2">{{ $t('blog.organize-yourself.why-hard.title') }}</b-h>
    <b-p>{{ $t('blog.organize-yourself.why-hard.text') }}</b-p>

    <b-h level="2">{{ $t('blog.organize-yourself.what-helps.title') }}</b-h>
    <b-p>{{ $t('blog.organize-yourself.what-helps.text') }}</b-p>

    <b-ul>
        <li>{{ $t('blog.organize-yourself.what-helps.list.break-tasks') }}</li>
        <li>{{ $t('blog.organize-yourself.what-helps.list.remember-things') }}</li>
        <li>{{ $t('blog.organize-yourself.what-helps.list.gentle-nudges') }}</li>
        <li>{{ $t('blog.organize-yourself.what-helps.list.calendar-integration') }}</li>
    </b-ul>

    <b-h level="2">{{ $t('blog.organize-yourself.organize-terms.title') }}</b-h>
    <b-p>{{ $t('blog.organize-yourself.organize-terms.text') }}</b-p>

    <b-p>
        <NuxtLink :to="{ path: '/', hash: '#contactForm' }">{{ $t('blog.organize-yourself.cta') }}</NuxtLink>
    </b-p>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
    layout: 'blog',
    title: 'Struggling to Stay Organized? Here\'s How to Regain Structure Without Overwhelm',
    description: 'Discover how to overcome executive dysfunction and mental fatigue with gentle, effective organization strategies that work with your brain, not against it.'
})
useSeoMeta({
    title: t('blog.organize-yourself.title'),
    ogTitle: t('blog.organize-yourself.title'),
    description: t('blog.organize-yourself.description'),
    ogDescription: t('blog.organize-yourself.description')
})
</script>