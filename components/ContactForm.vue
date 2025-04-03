<template>
  <form action="https://formspree.io/f/xqapbyyn" method="POST" class="contact-form">
    <b-p>
      <Alert color="warning" flex align-items="center">
        <BIcon icon="bi:exclamation-triangle-fill" flex="shrink-0" margin="e-2" aria-label="Warning:" />
        <div>{{ $t('contact-form.privacy-notice') }}</div>
      </Alert>
    </b-p>
    <b-p>
      <BFormLabel for="contactEmail">
        {{ $t('contact-form.email-label') }}
      </BFormLabel>
      <BFormInput id="contactEmail" type="email" name="email" :placeholder="$t('contact-form.email-placeholder')+'@example.com'" required size="lg"
        :model-value="contactFormInput.email" />
    </b-p>
    <b-p>
      <BFormLabel for="contactMessage">
        {{ $t('contact-form.message-label') }}
      </BFormLabel>
      <BFormTextarea id="contactMessage" type="email" name="message" :placeholder="$t('contact-form.message-placeholder')" rows="8" size="lg"
        required :model-value="contactFormInput.message" />
    </b-p>
    <b-p>
      <BFormCheck>
        <BFormCheckInput required />
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
      <b-button color="primary" type="submit" padding="x-5">{{ $t('contact-form.submit') }}</b-button>
    </b-p>
  </form>
</template>

<script lang="ts" setup>
const {t} = useI18n()
const route = useRoute()
const contactFormInput = ref({
  email: "",
  message: ""
})
onBeforeMount(() => {
  if (!!route.query['startConversation']) {
    contactFormInput.value.message = t('contact-form.start-conversation-template')
  }
  if (!!route.query['joinBeta']) {
    contactFormInput.value.message = t('contact-form.join-beta-template')
  }
})
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
