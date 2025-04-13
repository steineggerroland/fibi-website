<template>

</template>

<script setup lang="ts">
const router = useRouter()
const localePath = useLocalePath()
onBeforeMount(async () => {
  try {
    // Track the action
    await fetch('/api/track/startConversation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    console.error('Error tracking action:', error)
  }
  
  router.push({ path: localePath('/'), hash: '#contactForm', query: { startConversation: 'true' } })
})
</script>

<style></style>