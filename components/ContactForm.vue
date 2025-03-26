<template>
  <form action="https://formspree.io/f/xqapbyyn" method="POST" class="contact-form">
    <b-p>
      <Alert color="warning" flex align-items="center">
        <BIcon icon="bi:exclamation-triangle-fill" flex="shrink-0" margin="e-2" aria-label="Warning:" />
        <div>Don't send personal information using the form. The data is processed by <Anchor
            href="https://formspree.io/legal/privacy-policy/">formspree.io</Anchor>.</div>
      </Alert>
    </b-p>
    <b-p>
      <BFormLabel for="contactEmail">
        Email:
      </BFormLabel>
      <BFormInput id="contactEmail" type="email" name="email" placeholder="you@example.com" required size="lg"
        :model-value="contactFormInput.email" />
    </b-p>
    <b-p>
      <BFormLabel for="contactMessage">
        What can we help you with?
      </BFormLabel>
      <BFormTextarea id="contactMessage" type="email" name="message" placeholder="Hi Fibi Team, ..." rows="8" size="lg"
        required :model-value="contactFormInput.message" />
    </b-p>
    <b-p>
      <BFormCheck>
        <BFormCheckInput required />
        <BFormCheckLabel>I accept that my data is processed by <Anchor
            href="https://formspree.io/legal/privacy-policy/">https://formspree.io/</Anchor>.
        </BFormCheckLabel>
      </BFormCheck>
    </b-p>
    <b-p>
      <b-button color="primary" type="submit" padding="x-5">Send</b-button>
    </b-p>
  </form>
</template>

<script lang="ts" setup>
const route = useRoute()
const contactFormInput = ref({
  email: "",
  message: ""
})
onBeforeMount(() => {
  if (!!route.query['startConversation']) {
    contactFormInput.value.message = 'Hi Fibi-Team,\n\nI am interested in using Fibi.\nMy name is: <Your Name>\nFibi can support me to <Why do you want to use Fibi?>\n\nKind regards'
  }
  if (!!route.query['joinBeta']) {
    contactFormInput.value.message = 'Hi Fibi-Team,\n\nI am interested in joining the beta.\nMy name is: <Your Name>\nFibi can support me to <Why do you want to use Fibi?>\nI am willing to give feedback to improve Fibi.\n\nKind regards'
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
