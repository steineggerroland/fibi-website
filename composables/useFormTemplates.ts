import { ref, watch } from 'vue'
import { useRoute, useRouter } from '#app'
import { useI18n } from 'vue-i18n'

export const useFormTemplates = (message: Ref<string>) => {
  const { t } = useI18n()
  const route = useRoute()
  const router = useRouter()

  const appendTemplate = (template: string) => {
    if (!message.value.includes(template)) {
      message.value = message.value 
        ? `${message.value}\n\n${template}`
        : template
    }
    // Remove the query parameter
    router.replace({ path: route.path, hash: route.hash })
  }

  watch(() => route.query, (newQuery) => {
    if (newQuery.startConversation === 'true') {
      appendTemplate(t('contact-form.start-conversation-template'))
    } else if (newQuery.joinBeta === 'true') {
      appendTemplate(t('contact-form.join-beta-template'))
    }
  }, { immediate: true })

  return {
    appendTemplate
  }
} 