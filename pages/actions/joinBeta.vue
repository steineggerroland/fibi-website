<template>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
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
  
  // Redirect to contact form
  navigateTo({ path: '/', hash: '#contact-form', query: { joinBeta: 'true' } })
})
</script>

<style></style>