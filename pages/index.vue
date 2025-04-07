<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import { definePageMeta } from '#imports'

definePageMeta({
    layout: 'landing'
})
const { t } = useI18n()
useSeoMeta({
    title: t('index.page.title'),
    ogTitle: t('index.page.title'),
    description: t('index.page.description'),
    ogDescription: t('index.page.description')
})

const localePath = useLocalePath()

const scrollToContactForm = () => {
    setTimeout(() => {
        const element = document.getElementById('contactForm')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }, 100)
}

useSeoMeta({
    title: t('index.page.title'),
    ogTitle: t('index.page.title'),
    description: t('index.page.description'),
    ogDescription: t('index.page.description')
})

const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEZ9VGKRYJKwYBBAHaRw8BAQdA4lAz9chDn0LLckGWMZvkZhL64Xro9Z1rqqNB
IUunB0XNKVJvbGFuZCBTdGVpbmVnZ2VyIDxyb2xhbmRAc3RlaW5lZ2dlci5vbmU+
wo8EExYIADcWIQQtcfn4ChvKyDmEsn9LT6exGrGi4wUCZ9VGKQUJAeEzgAIbAwQL
CQgHBRUICQoLBRYCAwEAAAoJEEtPp7EasaLj1ZoBANcnj/9WfME2ukq549smgL3E
lEFSmnwPMiSefB0DrgIKAQDK1YYDYuAiU+Ih/m8wPJzC0r2afxa+WDMs404nJAH9
C844BGfVRikSCisGAQQBl1UBBQEBB0B7arp1KcvGw0UyCltrMicJx3NZQoAPLXut
Hom+jQchCQMBCAfCfgQYFggAJhYhBC1x+fgKG8rIOYSyf0tPp7EasaLjBQJn1UYp
BQkB4TOAAhsMAAoJEEtPp7EasaLjzQ8A/izL/Mi1LR15DAGgNgV/hiIYWvIfzDBi
1ZiLjzdLpkJwAQD0LMQnTJO2+kgeGHAcpq9Rt6j6umMehp/8pOROvlqrCw==
=WBjW
-----END PGP PUBLIC KEY BLOCK-----`
</script>
<template>
    <div class="hero">
        <HeroRow size="md-10 lg-8" margin="y-5">
            <Container>
                <b-h level="1" line-height="0" class="display-4 mb-5">
                    <Avatar circle size="lg" img-src="/niva.png" margin="e-2" img-alt="Niva"
                        style="display: inline-block;" />{{ $t('index.hero.title') }}
                    <br><b-div padding="0" font-size="4">{{ $t('index.hero.subtitle') }}</b-div>
                </b-h>
                <b-p class="mb-1" font-size="5">
                    <b-div flex flex-direction="row" position="relative">
                        <b-div margin="e-3">{{ $t('index.hero.features.prefix-with-dots') }}</b-div>
                        <b-div>
                            <List unstyled>
                                <ListItem><b-div visually-hidden>{{ $t('index.hero.features.prefix') }} </b-div>{{
                                    $t('index.hero.features.reminds-you-to-note-tasks') }}
                                </ListItem>
                                <ListItem><b-div visually-hidden>{{ $t('index.hero.features.prefix') }} </b-div>{{
                                    $t('index.hero.features.keeps-track-of-your-calendar') }}
                                </ListItem>
                                <ListItem><b-div visually-hidden>{{ $t('index.hero.features.prefix') }} </b-div>{{
                                    $t('index.hero.features.helps-you-create-small-doable-tasks') }}
                                </ListItem>
                                <ListItem><b-div visually-hidden>{{ $t('index.hero.features.prefix') }} </b-div>{{
                                    $t('index.hero.features.uses-your-favorite-messenger') }}
                                </ListItem>
                                <ListItem><b-div visually-hidden>{{ $t('index.hero.features.prefix') }} </b-div>{{
                                    $t('index.hero.features.understands-everyday-language') }}
                                </ListItem>
                            </List>
                        </b-div>
                    </b-div>
                </b-p>
            </Container>
            <Container margin="y-2">
                <NuxtLink :to="{ path: localePath('/'), hash: '#contactForm', query: { startConversation: 'true' } }"
                    @click="scrollToContactForm"><b-button color="primary" size="lg" padding="y-3 x-5"
                        font-weight="light" font-size="2">{{ $t('index.hero.start-chat') }}</b-button></NuxtLink>
            </Container>
        </HeroRow>
    </div>
    <Background background-color="info-subtle" margin="y-5">
        <Container margin="y-5">
            <Row margin="b-4" text-alignment="center">
                <Col>
                <h2 id="features">{{ $t('index.features.title') }}</h2>
                <hr>
                </Col>
            </Row>
            <Row columns="1 sm-2 lg-3 xl-4" gutter="5">
                <Col>
                <MorningRoutineCard margin="auto"></MorningRoutineCard>
                </Col>
                <Col>
                <TaskAndCalendarSyncCard margin="auto"></TaskAndCalendarSyncCard>
                </Col>
                <Col>
                <PositiveNudgesCard margin="auto"></PositiveNudgesCard>
                </Col>
                <Col>
                <FriendlyRemindersCard margin="auto"></FriendlyRemindersCard>
                </Col>
                <Col>
                <RoutineCard margin="auto"></RoutineCard>
                </Col>
                <Col>
                <ScanMailsCard margin="auto"></ScanMailsCard>
                </Col>
                <Col>
                <PhotographNoticesCard margin="auto"></PhotographNoticesCard>
                </Col>
                <Col>
                <PrivacyCard margin="auto"></PrivacyCard>
                </Col>
            </Row>
        </Container>
    </Background>
    <Container margin="y-5">
        <Row text-alignment="center">
            <h2 id="morningRoutine">{{ $t('index.morning-routine.title') }}</h2>
            <hr>
            <b-div font-size="5" margin="b-4">
                {{ $t('index.morning-routine.teaser') }}
            </b-div>
        </Row>
        <Row>
            <Col class="col-12 col-md-6">
            <MorningRoutineChat background-color="info-subtle"></MorningRoutineChat>
            </Col>
            <Col>
            <List font-size="5">
                <ListItem>{{ $t('index.morning-routine.get-up-to-date-information-weather-appointments') }}</ListItem>
                <ListItem>{{ $t('index.morning-routine.walk-through-your-planned-routine-breakfast-shower') }}
                </ListItem>
                <ListItem>{{ $t('index.morning-routine.start-the-day-with-a-well-prepared-structure') }}</ListItem>
            </List>
            <BBlockquoteFigure>
                <BBlockquote>
                    <b-p>{{ $t('index.morning-routine.quote.roland-text') }}</b-p>
                </BBlockquote>
                <BBlockquoteFooter>
                    {{ $t('index.morning-routine.quote.roland-name') }}
                </BBlockquoteFooter>
            </BBlockquoteFigure>
            </Col>
        </Row>
    </Container>
    <Background background-color="info-subtle">
        <Container margin="y-5">
            <Row text-alignment="center">
                <h2 id="taskCalendarSync">{{ $t('index.taskCalendarSync.title') }}</h2>
                <hr>
                <b-div font-size="5" margin="b-4">
                    {{ $t('index.taskCalendarSync.teaser') }}
                </b-div>
            </Row>
            <Row>
                <Col class="col-12 col-md-6">
                <TaskAndCalendarSyncChat></TaskAndCalendarSyncChat>
                </Col>
                <Col>
                <List font-size="5">
                    <ListItem>{{ $t('index.taskCalendarSync.fairy-looks-for-unusual-events') }}</ListItem>
                    <ListItem>{{ $t('index.taskCalendarSync.get-answers-to-when-is-my-next-doctor-appointment') }}
                    </ListItem>
                    <ListItem>{{ $t('index.taskCalendarSync.block-time-slots-for-tasks') }}</ListItem>
                    <ListItem>{{ $t('index.taskCalendarSync.split-big-tasks-with-help-by-fairy') }}</ListItem>
                </List>
                <BBlockquoteFigure>
                    <BBlockquote>
                        <b-p>{{ $t('index.taskCalendarSync.quote.roland-text') }}</b-p>
                    </BBlockquote>
                    <BBlockquoteFooter>
                        {{ $t('index.taskCalendarSync.quote.roland-name') }}
                    </BBlockquoteFooter>
                </BBlockquoteFigure>
                </Col>
            </Row>
        </Container>
    </Background>
    <Container margin="y-5">
        <Row text-alignment="center">
            <h2 id="positiveNudges">{{ $t('index.positive-nudges.title') }}</h2>
            <hr>
            <b-div font-size="5" margin="b-4">
                {{ $t('index.positive-nudges.teaser') }}
            </b-div>
        </Row>
        <Row>
            <Col class="col-12 col-md-6">
            <PositiveNudgesChat background-color="info-subtle"></PositiveNudgesChat>
            </Col>
            <Col>
            <List font-size="5">
                <ListItem>{{ $t('index.positive-nudges.fairy-is-your-safe-space') }}</ListItem>
                <ListItem>{{ $t('index.positive-nudges.reminding-you-without-being-pushy') }}</ListItem>
                <ListItem>{{ $t('index.positive-nudges.gives-ideas-how-to-start-small') }}</ListItem>
                <ListItem>{{ $t('index.positive-nudges.knows-your-calendar-and-when-there-is-time') }}</ListItem>
            </List>
            <BBlockquoteFigure>
                <BBlockquote>
                    <b-p>{{ $t('index.positive-nudges.quote.roland-text') }}</b-p>
                </BBlockquote>
                <BBlockquoteFooter>
                    {{ $t('index.positive-nudges.quote.roland-name') }}
                </BBlockquoteFooter>
            </BBlockquoteFigure>
            </Col>
        </Row>
    </Container>
    <Background background-color="info-subtle">
        <Container margin="y-5">
            <Row text-alignment="center">
                <h2 id="friendlyReminders">{{ $t('index.friendly-reminders.title') }}</h2>
                <hr>
                <b-div font-size="5" margin="b-4">
                    {{ $t('index.friendly-reminders.teaser-first-line') }}<br>
                    {{ $t('index.friendly-reminders.teaser-second-line') }}
                </b-div>
            </Row>
            <Row>
                <Col class="col-12 col-md-6">
                <FriendlyRemindersChat></FriendlyRemindersChat>
                </Col>
                <Col>
                <List font-size="5">
                    <ListItem>{{
                        $t('index.friendly-reminders.tell-fairy-to-remind-you-about-tasks-events-after-picking-up-your-children')
                    }}</ListItem>
                    <ListItem>{{ $t('index.friendly-reminders.set-reminders-for-any-doctor-appointment') }}<br>{{
                        $t('index.friendly-reminders.remind-me-about-doctor-events-2-day-in-advance') }}</ListItem>
                </List>
                <BBlockquoteFigure>
                    <BBlockquote>
                        <b-p>{{ $t('index.friendly-reminders.quote.roland-text') }}</b-p>
                    </BBlockquote>
                    <BBlockquoteFooter>
                        {{ $t('index.friendly-reminders.quote.roland-name') }}
                    </BBlockquoteFooter>
                </BBlockquoteFigure>
                </Col>
            </Row>
        </Container>
    </Background>
    <Container margin="y-5" flex-direction="column" style="max-width: 768px;">
        <b-h id="earlyAccess" level="2" font-size="1" margin="b-4">{{ $t('index.early-access.title') }}</b-h>
        <b-p>
            {{ $t('index.early-access.teaser') }}
            <List>
                <ListItem>{{ $t('index.early-access.fairy-uses-just-signal-messenger-right-now') }}</ListItem>
                <ListItem>{{ $t('index.early-access.you-are-willing-to-give-me-feedback-on-your-experience-with-fairy')
                }}</ListItem>
                <ListItem>{{ $t('index.early-access.you-are-willing-to-actively-use-fairy') }}</ListItem>
            </List>
        </b-p>
        <b-p>
            {{ $t('index.early-access.benefits.title') }}
            <List>
                <ListItem>{{ $t('index.early-access.benefits.a-companion-who-suppots-you') }}</ListItem>
                <ListItem>{{ $t('index.early-access.benefits.at-least-2-years-free-access') }}</ListItem>
                <ListItem>{{ $t('index.early-access.benefits.shape-fairy-your-feedback-leads-to-features-you-need') }}
                </ListItem>
                <ListItem><em>{{ $t('index.early-access.benefits.lifetime-access-for-significant-support') }}</em>
                </ListItem>
            </List>
        </b-p>
        <b-p>
            <NuxtLink :to="{ path: localePath('/'), hash: '#contactForm', query: { joinBeta: 'true' } }"
                @click="scrollToContactForm"><b-button color="primary" size="lg">{{
                    $t('index.early-access.call-to-action') }}</b-button></NuxtLink>
        </b-p>
        <b-p>
            <NuxtLink :to="localePath('/#about')">{{ $t('index.early-access.further-information') }}</NuxtLink>
        </b-p>
    </Container>
    <Background background-color="info-subtle">
        <Container margin="y-5" style="max-width: 768px;">
            <b-h level="2" id="contactForm">{{ $t('index.contact.title') }}</b-h>
            <ContactForm></ContactForm>
        </Container>
    </Background>
    <Container margin="y-5" style="max-width: 768px;">
        <b-h id="encryptedMail" level="2">
            {{ $t('index.secure-contact.title') }}
        </b-h>
        <b-p>
            <i18n-t keypath="index.secure-contact.teaser" tag="b-p">
                <template #software>
                    <Anchor href="https://support.mozilla.org/de/kb/openpgp-in-thunderbird-leitfaden-und-faqs" external>
                        Thunderbird
                    </Anchor>
                </template>
            </i18n-t>
            <Accordion parent>
                <AccordionSection title="Public Key">
                    <UseClipboard v-slot="{ copy, copied }" :source="publicKey">
                        <b-p font-monospace user-select="all" @click="copy()">
                            -----BEGIN PGP PUBLIC KEY BLOCK-----<br>
                            xjMEZ9VGKRYJKwYBBAHaRw8BAQdA4lAz9chDn0LLckGWMZvkZhL64Xro9Z1rqqNB<br>
                            IUunB0XNKVJvbGFuZCBTdGVpbmVnZ2VyIDxyb2xhbmRAc3RlaW5lZ2dlci5vbmU+<br>
                            wo8EExYIADcWIQQtcfn4ChvKyDmEsn9LT6exGrGi4wUCZ9VGKQUJAeEzgAIbAwQL<br>
                            CQgHBRUICQoLBRYCAwEAAAoJEEtPp7EasaLj1ZoBANcnj/9WfME2ukq549smgL3E<br>
                            lEFSmnwPMiSefB0DrgIKAQDK1YYDYuAiU+Ih/m8wPJzC0r2afxa+WDMs404nJAH9<br>
                            C844BGfVRikSCisGAQQBl1UBBQEBB0B7arp1KcvGw0UyCltrMicJx3NZQoAPLXut<br>
                            Hom+jQchCQMBCAfCfgQYFggAJhYhBC1x+fgKG8rIOYSyf0tPp7EasaLjBQJn1UYp<br>
                            BQkB4TOAAhsMAAoJEEtPp7EasaLjzQ8A/izL/Mi1LR15DAGgNgV/hiIYWvIfzDBi<br>
                            1ZiLjzdLpkJwAQD0LMQnTJO2+kgeGHAcpq9Rt6j6umMehp/8pOROvlqrCw==<br>
                            =WBjW<br>
                            -----END PGP PUBLIC KEY BLOCK-----
                        </b-p>
                        <b-button color="button" @click="copy()">
                            {{ copied ? 'Copied' : 'Copy' }}
                        </b-button>
                    </UseClipboard>
                </AccordionSection>
            </Accordion>
        </b-p>
    </Container>
    <Background background-color="info-subtle">
        <Container margin="y-5" style="max-width: 768px;" id="about">
            <b-h level="2">{{ $t('index.background.title') }}</b-h>
            <b-h level="3">{{ $t('index.background.tab.who-am-i-why-fairy.title') }}</b-h>
            <b-p>
                {{ $t('index.background.tab.who-am-i-why-fairy.text') }}
            </b-p>
            <b-h level="3">{{ $t('index.background.tab.ongoing-journey-of-fairy.title') }}</b-h>
            <b-p>
                {{ $t('index.background.tab.ongoing-journey-of-fairy.text') }}
            </b-p>
        </Container>
    </Background>
    <Background background-color="dark-subtle">
        <Container>
            <Row padding="y-2">
                <b-p id="featuresThatNeedFunding">
                    {{
                        $t('index.footnote.these-are-features-id-love-to-implement-but-that-are-complex-and-need-funding')
                    }}
                </b-p>
            </Row>
        </Container>
    </Background>
</template>
<style scoped>
.hero {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    background-image: url("../assets/hero_background.png");
}

@media (min-width:1562px) {
    .hideOnBig {
        display: none;
    }
}
</style>