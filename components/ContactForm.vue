<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <b-p>
      <BFormLabel for="contactEmail">
        {{ $t('contact-form.email-label') }}
      </BFormLabel>
      <BFormInput id="contactEmail" type="email" name="email" :placeholder="$t('contact-form.email-placeholder')+'@example.com'" required size="lg"
        v-model="contactFormInput.email" />
    </b-p>
    <b-p>
      <BFormLabel for="contactMessage">
        {{ $t('contact-form.message-label') }}
      </BFormLabel>
      <BFormTextarea id="contactMessage" type="email" name="message" :placeholder="$t('contact-form.message-placeholder')" rows="8" size="lg"
        required v-model="contactFormInput.message" />
    </b-p>
    <b-p>
      <BFormCheck>
        <BFormCheckInput required v-model="acceptedTerms" />
        <BFormCheckLabel>
          <i18n-t keypath="contact-form.accept-processed-by-label" tag="span">
            <template #thirdParty>
              <Anchor href="https://formspree.io/legal/privacy-policy/" external>formspree.io</Anchor>
            </template>
          </i18n-t>.
        </BFormCheckLabel>
      </BFormCheck>
    </b-p>
    <b-p>
      <b-button color="primary" type="submit" padding="x-5" :disabled="!acceptedTerms">{{ $t('contact-form.submit') }}</b-button>
    </b-p>
  </form>
</template>

<script lang="ts" setup>
const {t} = useI18n()
const route = useRoute()
const router = useRouter()
const acceptedTerms = ref(false)
const contactFormInput = ref({
  email: "",
  message: ""
})

useFormTemplates(computed(() => contactFormInput.value.message))

// Watch for route query changes
watch(() => route.query, (newQuery) => {
  if (newQuery.startConversation === 'true') {
    // Append the template if it's not already in the message
    const template = t('contact-form.start-conversation-template')
    if (!contactFormInput.value.message.includes(template)) {
      contactFormInput.value.message = contactFormInput.value.message 
        ? `${contactFormInput.value.message}\n\n${template}`
        : template
    }
    // Remove the query parameter
    router.replace({ path: route.path, hash: route.hash })
  } else if (newQuery.joinBeta === 'true') {
    // Append the template if it's not already in the message
    const template = t('contact-form.join-beta-template')
    if (!contactFormInput.value.message.includes(template)) {
      contactFormInput.value.message = contactFormInput.value.message 
        ? `${contactFormInput.value.message}\n\n${template}`
        : template
    }
    // Remove the query parameter
    router.replace({ path: route.path, hash: route.hash })
  }
}, { immediate: true })

const handleSubmit = async () => {
  try {
    const response = await fetch('https://formspree.io/f/xqapbyyn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactFormInput.value)
    })
    
    if (response.ok) {
      // Clear form
      contactFormInput.value = {
        email: "",
        message: ""
      }
      acceptedTerms.value = false
      // Show success message or redirect
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>

<style scoped>
.contact-form {
  transition: all 500ms ease-in-out;
  border-radius: 1em;
}

.contact-form:focus-within {
  background-color: rgba(255, 255, 255, 0.33);
}
</style>
