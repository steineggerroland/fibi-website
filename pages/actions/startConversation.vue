<template>

</template>

<script setup lang="ts">
onMounted(async () => {
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
  
  // Redirect to contact form
  navigateTo({ path: '/', hash: '#contact-form', query: { startConversation: 'true' } })
})
</script>

<style></style>