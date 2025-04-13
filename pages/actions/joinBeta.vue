<template>

</template>

<script setup lang="ts">
const router = useRouter()
const localePath = useLocalePath()
onBeforeMount(async () => {
  try {
    // Track the action
    await fetch('/api/track/joinBeta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    console.error('Error tracking action:', error)
  }
  
  router.push({ path: localePath('/'), hash: '#contactForm', query: { joinBeta: 'true' } })
})
</script>

<style></style>