<template>
    <DefaultNavbar :content-height="contentHeight" />
    <Container ref="content">
        <slot />
    </Container>
    <Footer />
</template>

<script lang="ts" setup>
const content = useTemplateRef('content')
const { height: contentHeight } = useElementSize(content)
</script>