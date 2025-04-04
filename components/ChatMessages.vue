<template>
  <b-p :text-alignment="textDirection">
    <b-div :data-aos="fadeDirection">
      <ChatAvatar :person="author"></ChatAvatar>
    </b-div>
    <b-div :data-aos="fadeDirection">
      <slot></slot>
    </b-div>
  </b-p>
</template>

<script lang="ts" setup>
const { author } = defineProps<{ author: string }>()
const fadeDirection = ref(author === "Niva" ? "fade-right" : "fade-left")
const textDirection = ref(author === "Niva" ? "start" : "end")
</script>

<style scoped>
</style>