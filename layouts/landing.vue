<template>
  <DefaultNavbar :content-height="contentHeight" />
  <div ref="content">
    <slot />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
const content = useTemplateRef('content')
const { height: contentHeight } = useElementSize(content)
</script>