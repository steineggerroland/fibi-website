<template>
  <b-div v-if="person === 'Fibi'" margin="b-2">
    <Avatar circle size="xs" img-src="fibi.png" img-alt="Picture representing Fibi as a cute animal" /> Fibi
  </b-div>
  <b-div v-else margin="b-2">
    {{ person }}
    <Avatar circle size="xs" img-src="you.png" img-alt="A cute little sloth as a placeholder for your picture" />
  </b-div>
</template>

<script lang="ts" setup>
const { person } = defineProps<{ person: string }>()
</script>

<style></style>