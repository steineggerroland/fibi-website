<template>
    <div class="privacy-policy">
        <Container margin="y-5">
            <Row>
                <Col>
                    <b-h level="1">{{ $t('privacy-policy.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.last-updated') }}</b-p>

                    <b-h level="2">{{ $t('privacy-policy.introduction.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.introduction.text') }}</b-p>

                    <b-h level="2">{{ $t('privacy-policy.controller.title') }}</b-h>
                    <b-p>
                        {{ $t('privacy-policy.controller.name') }}<br>
                        {{ $t('privacy-policy.controller.address') }}<br>
                        <Anchor :href="'mailto:' + $t('privacy-policy.controller.email')">
                            {{ $t('privacy-policy.controller.email') }}
                        </Anchor>
                    </b-p>

                    <b-h level="2">{{ $t('privacy-policy.data-processing.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.data-processing.intro') }}</b-p>

                    <b-h level="3">{{ $t('privacy-policy.data-processing.necessary.title') }}</b-h>
                    <i18n-t keypath="privacy-policy.data-processing.necessary.text" tag="b-p">
                        <template #hostingProvider>
                            <Anchor href="https://strato.de" external>strato.de</Anchor>
                        </template>
                    </i18n-t>

                    <b-h level="3">{{ $t('privacy-policy.data-processing.analytics.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.data-processing.analytics.text') }}</b-p>

                    <b-h level="3">{{ $t('privacy-policy.data-processing.tracking.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.data-processing.tracking.text') }}</b-p>

                    <b-h level="2">{{ $t('privacy-policy.legal-basis.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.legal-basis.text') }}</b-p>

                    <b-h level="2">{{ $t('privacy-policy.data-retention.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.data-retention.text') }}</b-p>

                    <b-h level="2">{{ $t('privacy-policy.your-rights.title') }}</b-h>
                    <b-p>{{ $t('privacy-policy.your-rights.intro') }}</b-p>
                    <List>
                        <ListItem>{{ $t('privacy-policy.your-rights.access') }}</ListItem>
                        <ListItem>{{ $t('privacy-policy.your-rights.rectification') }}</ListItem>
                        <ListItem>{{ $t('privacy-policy.your-rights.erasure') }}</ListItem>
                        <ListItem>{{ $t('privacy-policy.your-rights.restriction') }}</ListItem>
                        <ListItem>{{ $t('privacy-policy.your-rights.objection') }}</ListItem>
                        <ListItem>{{ $t('privacy-policy.your-rights.portability') }}</ListItem>
                    </List>

                    <b-h level="2">{{ $t('privacy-policy.contact.title') }}</b-h>
                    <i18n-t keypath="privacy-policy.contact.text" tag="b-p">
                        <template #email>
                            <Anchor :href="'mailto:' + $t('privacy-policy.controller.email')">
                                {{ $t('privacy-policy.controller.email') }}
                            </Anchor>
                        </template>
                    </i18n-t>
                </Col>
            </Row>
        </Container>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing'
})
const {t} = useI18n()

useSeoMeta({
    title: t('privacy-policy.meta.title'),
    ogTitle: t('privacy-policy.meta.title'),
    description: t('privacy-policy.meta.description'),
    ogDescription: t('privacy-policy.meta.description')
})
</script>

<style scoped>
.privacy-policy {
    max-width: 800px;
    margin: 0 auto;
}
</style> 