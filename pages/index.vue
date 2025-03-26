<script setup lang="ts">
definePageMeta({
    layout: 'landing',
    title: 'Fibi - Your companion',
    description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
const fibiProperties = ["Day-Planner", "Companion", "Reminder", "Assistant", "Task-Planner"]
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
                <b-h level="1" line-height="0" class="display-3 mb-5">
                    <Avatar circle size="sm" img-src="fibi.png" img-alt="Picture representing Fibi as a cute animal" />
                    Fibi:<br>Your Friendly <Typed class="text-primary" :strings="fibiProperties">
                    </Typed><br><b-div padding="0" font-size="4">having Neurospicy Brains in mind</b-div>
                </b-h>
                <b-p class="mb-1" font-size="5">
                    <b-div flex flex-direction="row" position="relative">
                        <b-div margin="e-3">Fibi ...</b-div>
                        <b-div>
                            <List unstyled>
                                <ListItem><b-div visually-hidden>Fibi </b-div>reminds you to note tasks
                                </ListItem>
                                <ListItem><b-div visually-hidden>Fibi </b-div>keeps track of your calendar
                                </ListItem>
                                <ListItem><b-div visually-hidden>Fibi </b-div>helps you create small doable tasks
                                </ListItem>
                                <ListItem><b-div visually-hidden>Fibi </b-div>uses your favorite messenger
                                </ListItem>
                                <ListItem><b-div visually-hidden>Fibi </b-div>understands everyday language
                                </ListItem>
                            </List>
                        </b-div>
                    </b-div>
                </b-p>
            </Container>
            <Container margin="y-2">
                <Anchor href="/actions/startConversation"><b-button color="primary" size="lg" padding="y-3 x-5"
                        font-weight="light" font-size="2">Start Chat</b-button></Anchor>
            </Container>
        </HeroRow>
    </div>
    <Background background-color="blue-100" margin="y-5">
        <Container margin="y-5">
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
            <h2 id="morningRoutine">Morning Routine</h2>
            <hr>
            <b-div font-size="5" margin="b-4">
                Start the day with a warm good morning by Fibi. Plan the day with Fibi, go through appointments, block
                time for tasks, …
            </b-div>
        </Row>
        <Row>
            <Col>
            <MorningRoutineChat background-color="blue-100"></MorningRoutineChat>
            </Col>
            <Col>
            <List font-size="5">
                <ListItem>Get up-to-date information (weather, appointments, …)</ListItem>
                <ListItem>Walk through your planned routine (Breakfast ✅, Shower ✅, …)</ListItem>
                <ListItem>Start the day with a well-prepared structure</ListItem>
            </List>
            <BBlockquoteFigure>
                <BBlockquote>
                    <b-p>I like to get an overview of the day in the morning and plan my to-dos.</b-p>
                </BBlockquote>
                <BBlockquoteFooter>
                    Roland, Founder
                </BBlockquoteFooter>
            </BBlockquoteFigure>
            </Col>
        </Row>
    </Container>
    <Background background-color="blue-100">
        <Container margin="y-5">
            <Row text-alignment="center">
                <h2 id="taskCalendarSync">Task & Calendar Sync</h2>
                <hr>
                <b-div font-size="5" margin="b-4">
                    Highlights <em>special</em> appointments and helps preparation. Keep using your favorite app, e.g.,
                    Trello, Wonderlist, Deck - Fibi integrates them.
                </b-div>
            </Row>
            <Row>
                <Col>
                <TaskAndCalendarSyncChat></TaskAndCalendarSyncChat>
                </Col>
                <Col>
                <List font-size="5">
                    <ListItem>Fibi looks for unusual events</ListItem>
                    <ListItem>Get answers to: "When is my next doctor appointment"</ListItem>
                    <ListItem>Block time slots for tasks</ListItem>
                    <ListItem>Split big tasks with help by fibi</ListItem>
                </List>
                <BBlockquoteFigure>
                    <BBlockquote>
                        <b-p>I often got "surprised" by doctor appointents and other less regular events</b-p>
                    </BBlockquote>
                    <BBlockquoteFooter>
                        Roland, Founder
                    </BBlockquoteFooter>
                </BBlockquoteFigure>
                </Col>
            </Row>
        </Container>
    </Background>
    <Container margin="y-5">
        <Row text-alignment="center">
            <h2 id="positiveNudges">Positive Nudges</h2>
            <hr>
            <b-div font-size="5" margin="b-4">
                Trouble with starting tasks? Have you tried task lists, bullet journals, apps, cards, ...?
            </b-div>
        </Row>
        <Row>
            <Col>
            <PositiveNudgesChat background-color="blue-100"></PositiveNudgesChat>
            </Col>
            <Col>
            <List font-size="5">
                <ListItem>Fibi is your safe space</ListItem>
                <ListItem>Reminding you without being pushy</ListItem>
                <ListItem>Gives ideas how to start small</ListItem>
                <ListItem>Knows your calendar and when there is time</ListItem>
            </List>
            <BBlockquoteFigure>
                <BBlockquote>
                    <b-p>I tried a lot of tools to organize my days but lost focus quickly.</b-p>
                </BBlockquote>
                <BBlockquoteFooter>
                    Roland, Founder
                </BBlockquoteFooter>
            </BBlockquoteFigure>
            </Col>
        </Row>
    </Container>
    <Background background-color="blue-100">
        <Container margin="y-5">
            <Row text-alignment="center">
                <h2 id="friendlyReminders">Friendly Reminders</h2>
                <hr>
                <b-div font-size="5" margin="b-4">
                    Do you have to handle a bunch of stuff and feel lost?<br>
                    School, Kindergarten, Sport Clubs, Friends, ...
                </b-div>
            </Row>
            <Row>
                <Col>
                <FriendlyRemindersChat></FriendlyRemindersChat>
                </Col>
                <Col>
                <List font-size="5">
                    <ListItem>Tell Fibi to remind you about tasks/events after picking up your children</ListItem>
                    <ListItem>Set reminders for any doctor appointment:<br>"Remind me about doctor events 2 day in
                        advance."</ListItem>
                </List>
                <BBlockquoteFigure>
                    <BBlockquote>
                        <b-p>I missed a lot of deadlines, did not particpate in events with my children and had trouble
                            keeping track of things.</b-p>
                    </BBlockquote>
                    <BBlockquoteFooter>
                        Roland, Founder
                    </BBlockquoteFooter>
                </BBlockquoteFigure>
                </Col>
            </Row>
        </Container>
    </Background>
    <Container margin="y-5" flex-direction="column" style="max-width: 768px;">
        <b-h level="2" font-size="1" margin="b-4">Ready for less overwhelm?</b-h>
        <b-p>
            Fibi is searching for active feedback. You can be part of the Beta. Requirements:
            <List>
                <ListItem>Fibi uses just signal messenger right now</ListItem>
                <ListItem>You are willing to give me feedback on your experience with Fibi</ListItem>
                <ListItem>You are willing to actively use Fibi</ListItem>
            </List>
        </b-p>
        <b-p>
            <Anchor href="actions/joinBeta"><b-button color="primary" size="lg">Get Early Access</b-button></Anchor>
        </b-p>
        <b-p>
            <Anchor href="#about">Want to know more on Fibi's and their creatores background?</Anchor>
        </b-p>
    </Container>
    <Background background-color="blue-100">
        <Container margin="y-5" style="max-width: 768px;">
            <b-h level="2" id="contact-form">Contact</b-h>
            <ContactForm></ContactForm>
        </Container>
    </Background>
    <Container margin="y-5" style="max-width: 768px;">
        <b-h id="encryptedMail" level="2">
            Secure Contact
        </b-h>
        <b-p>
            <b-p>Email communication is not secure by design, thus, if you want to send a real secure mail, you can
                use my Public PGP Key (roland@steinegger.one). PGP encryption ensures, that just I can read the
                mail. Software like <Anchor target="_blank"
                    href="https://support.mozilla.org/de/kb/openpgp-in-thunderbird-leitfaden-und-faqs">Thunderbird
                </Anchor> supports secure mails easily.</b-p>
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
    <Background background-color="blue-100">
        <Container margin="y-5" style="max-width: 768px;" id="about">
            <b-h level="2">Background on Fibi and their creators</b-h>
            <b-p>
                <Accordion parent>
                    <AccordionSection title="Who am I? Why Fibi?" :active="true">
                        <b-p>
                            Hello, I’m Roland—a software developer with autism who’s always struggled to stay organized.
                            I dreamed of a personal helper who could nudge me gently, remind me of tasks, and keep
                            everything in one place.
                            Once large language models emerged, it finally felt possible to bring “Fibi” to life!
                        </b-p>
                    </AccordionSection>
                    <AccordionSection title="Ongoing journey of Fibi">
                        <b-p>
                            The ongoing journey of Fibi
                            Fibi already supports tasks, calendar syncing (CalDAV/ICS), reminders, timers, and even a
                            morning routine feature.
                            But there’s more I’d love to improve. I’m currently running a smaller language model locally
                            for privacy,
                            and new hardware would help me scale while keeping your data secure and private.
                            That’s why I’m seeking funding—to build a more robust system and add the advanced features
                            our community needs, all without handing any personal data to third parties.
                        </b-p>
                    </AccordionSection>
                </Accordion>
            </b-p>
        </Container>
    </Background>
    <Background background-color="dark" text-color="light">
        <Container margin="y-5">
            <Row>
                <Col>
                <b-h level="2">Legal notice</b-h>
                <b-p>
                    Roland Steinegger<br>
                    Koppoldstr. 1<br>
                    c/o COCENTER<br>
                    86551 Aichach
                </b-p>
                </Col>
                <Col>
                <b-h level="3">Contact</b-h>
                <b-h level="4">Editorial Responsibility</b-h>
                <b-p>
                    <br>
                    Roland Steinegger<br>
                    <Anchor href="mailto:roland@neurospicy.icu">roland@neurospicy.icu</Anchor><br>
                    c/o COCENTER<br>
                    Koppoldstr. 1<br>
                    86551 Aichach<br>
                </b-p>
                </Col>
            </Row>
            <Row>
                <b-p id="featuresThatNeedFunding">
                    * These are features I'd love to implement, but that are complex and need funding.
                </b-p>
            </Row>
        </Container>
    </Background>
    <Background background-color="light">
        <Container text-alignment="center">
            © 2025 Roland Steinegger
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
</style>