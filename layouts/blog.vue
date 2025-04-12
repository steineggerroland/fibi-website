<template>
    <DefaultNavbar :content-height="contentHeight" />
    <b-div ref="content">
        <slot />
    </b-div>
    <Footer />
</template>

<script lang="ts" setup>
const content = useTemplateRef('content')
const { height: contentHeight } = useElementSize(content)
</script>