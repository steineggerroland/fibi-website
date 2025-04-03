import { ref, onMounted } from 'vue'

export const usePrivacy = () => {
  const analyticsAccepted = ref(false)
  const trackingAccepted = ref(false)

  const updatePrivacySettings = (settings: { analytics: boolean; tracking: boolean }) => {
    analyticsAccepted.value = settings.analytics
    trackingAccepted.value = settings.tracking
    localStorage.setItem('analyticsAccepted', settings.analytics.toString())
    localStorage.setItem('trackingAccepted', settings.tracking.toString())
  }

  onMounted(() => {
    analyticsAccepted.value = localStorage.getItem('analyticsAccepted') === 'true'
    trackingAccepted.value = localStorage.getItem('trackingAccepted') === 'true'
  })

  return {
    analyticsAccepted,
    trackingAccepted,
    updatePrivacySettings
  }
} 