<template>
  <Background :background-color="backgroundColor" rounded padding="2" display="inline-block" class="chat-bubble">
    <slot />
  </Background>
</template>

<script lang="ts" setup>
const { backgroundColor = "" } = defineProps<{ backgroundColor?: string }>()
</script>
<style scoped>
.chat-bubble {
  width: fit-content !important;
  font-family: "Secular One";
}
</style>>