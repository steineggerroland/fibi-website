<template>
    <b-div display="grid" gap="2" class="privacy-content">
        <Row class="privacy-header">
            <b-h level="2">{{ $t('privacy.title') }} <b-button color="light" size="sm" @click="togglePrivacyNotes">{{ $t('privacy.hide-privacy-settings') }}</b-button></b-h>
            <b-p><Anchor href="/privacy-policy" target="_blank">{{ $t('privacy.privacyPolicy') }}</Anchor></b-p>
        </Row>
        <Row class="privacy-option">
            <Col>{{ $t('privacy.necessary') }}
            </Col>
            <Col col="lg-2" display="grid" gap="2" margin="x-auto">
            <b-button color="success" size="sm" @click="togglePrivacyNotes">
                {{ $t('privacy.hide-privacy-settings') }}
            </b-button>
            </Col>
        </Row>
        <b-hr margin="y-0" />
        <Row class="privacy-option">
            <Col>{{ $t('privacy.analytics') }}</Col>
            <Col col="lg-2" display="grid" gap="2" margin="x-auto">
            <b-button color="primary" size="sm" @click="acceptAnalytics">
                {{ $t('privacy.accept-analytics') }}
            </b-button>
            </Col>
        </Row>
        <b-hr margin="y-0" />
        <Row class="privacy-option">
            <Col>{{ $t('privacy.tracking') }}</Col>
            <Col col="lg-2" display="grid" gap="2" margin="x-auto">
            <b-button color="warning" size="sm" @click="acceptTracking">
                {{ $t('privacy.accept-tracking') }}
            </b-button>
            </Col>
        </Row>
    </b-div>
</template>

<script setup lang="ts">

const collapseAndSave = (type: 'necessary' | 'analytics' | 'tracking') => {
    localStorage.setItem('privacyAccepted', 'true')
    localStorage.setItem('privacyType', type)

    // Emit event for parent components
    emit('privacy-accepted', {
        type,
        analytics: type === 'analytics' || type === 'tracking',
        tracking: type === 'tracking'
    })
}

const togglePrivacyNotes = () => {
    collapseAndSave('necessary')
}

const acceptAnalytics = async () => {
    try {
        // Call the analytics API endpoint
        await fetch('/api/analytics/accept', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        collapseAndSave('analytics')
    } catch (error) {
        console.error('Failed to accept analytics:', error)
    }
}

const acceptTracking = () => {
    collapseAndSave('tracking')
}

const emit = defineEmits(['privacy-accepted'])

</script>

<style scoped></style>