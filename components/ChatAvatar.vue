<template>
  <b-div v-if="person === 'Niva'" margin="b-2">
    <Avatar circle size="xs" img-src="niva.png" :img-alt="$t('general.avatar.fairy')" /> Niva
  </b-div>
  <b-div v-else margin="b-2">
    {{ person }}
    <Avatar circle size="xs" img-src="you.png" :img-alt="$t('general.avatar.sloth')" />
  </b-div>
</template>

<script lang="ts" setup>
const { person } = defineProps<{ person: string }>()
</script>

<style></style>