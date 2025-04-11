<template>
  <b-div v-if="person === 'Niva'" margin="b-2">
    <NuxtImg
      src="/niva.png"
      width="32"
      height="32"
      format="webp"
      quality="80"
      loading="lazy"
      :alt="$t('general.avatar.fairy')"
      class="rounded-circle me-2"
      sizes="32px"
    /> Niva
  </b-div>
  <b-div v-else margin="b-2">
    {{ person }}
    <NuxtImg
      src="/you.png"
      width="32"
      height="32"
      format="webp"
      quality="95"
      loading="lazy"
      :alt="$t('general.avatar.sloth')"
      class="rounded-circle me-2"
      sizes="32px"
    />
  </b-div>
</template>

<script lang="ts" setup>
const { person } = defineProps<{ person: string }>()
</script>

<style></style>