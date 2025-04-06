<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
    <Background background-color="dark" text-color="light">
        <Container margin="y-5">
            <Row>
                <Col>
                    <b-h id="legalNotice" level="2">{{ $t('legal-notice.title') }}</b-h>
                    <b-p>
                        Roland Steinegger<br>
                        Koppoldstr. 1<br>
                        c/o COCENTER<br>
                        86551 Aichach
                    </b-p>
                </Col>
                <Col>
                    <b-h level="3">{{ $t('legal-notice.contact.title') }}</b-h>
                    <b-h level="4">{{ $t('legal-notice.contact.editorial-responsibility.title') }}</b-h>
                    <b-p>
                        <br>
                        Roland Steinegger<br>
                        <Anchor href="mailto:roland@neurospicy.icu">roland@neurospicy.icu</Anchor><br>
                        c/o COCENTER<br>
                        Koppoldstr. 1<br>
                        86551 Aichach<br>
                    </b-p>
                </Col>
                <Col>
                    <b-h level="3">{{ $t('footer.privacy-policy.title') }}</b-h>
                    <b-p>
                        <NuxtLink :to="localePath('/privacy-policy')">{{ $t('footer.privacy-policy.text') }}</NuxtLink>
                    </b-p>
                </Col>
            </Row>
        </Container>
    </Background>
    <Background background-color="dark-subtle">
        <Container text-alignment="center">
            {{ $t('footer.copyright') }}
        </Container>
    </Background>
</template> 