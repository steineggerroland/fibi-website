<template>
    <b-div display="grid" gap="2" class="privacy-content">
        <Row class="privacy-header">
            <b-h level="2" id="privacy-acceptance-settings">{{ $t('privacy.title') }} <b-button v-if="!isPrivacyPolicy" color="light" size="sm" @click="useNecessaryDataOnly">{{ $t('privacy.hide-privacy-settings') }}</b-button></b-h>
            <b-p v-if="!isPrivacyPolicy"><NuxtLink :to="localePath('/privacy-policy')" target="_blank">{{ $t('privacy.privacyPolicy') }}</NuxtLink></b-p>
        </Row>
        <Row class="privacy-option">
            <Col>{{ $t('privacy.necessary') }}
            </Col>
            <Col :col="isPrivacyPolicy ? '4' : 'lg-2'" display="grid" gap="2" margin="x-auto">
            <b-button color="success" size="sm" @click="useNecessaryDataOnly">
                <span v-if="!isPrivacyPolicy">{{ $t('privacy.hide-privacy-settings') }}</span>
                <span v-else>{{ $t('privacy.use-necessary-data-only') }}</span>
            </b-button>
            </Col>
        </Row>
        <b-hr margin="y-0" />
        <Row class="privacy-option">
            <Col>{{ $t('privacy.analytics') }}</Col>
            <Col :col="isPrivacyPolicy ? '4' : 'lg-2'" display="grid" gap="2" margin="x-auto">
            <b-button color="primary" size="sm" @click="acceptAnalytics">
                {{ $t('privacy.accept-analytics') }}
            </b-button>
            </Col>
        </Row>
        <b-hr margin="y-0" />
        <Row class="privacy-option">
            <Col>{{ $t('privacy.tracking') }}</Col>
            <Col :col="isPrivacyPolicy ? '4' : 'lg-2'" display="grid" gap="2" margin="x-auto">
            <b-button color="warning" size="sm" @click="acceptTracking">
                {{ $t('privacy.accept-tracking') }}
            </b-button>
            </Col>
        </Row>
    </b-div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'

const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps({
    isPrivacyPolicy: {
        type: Boolean,
        default: false
    }
})

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

const useNecessaryDataOnly = () => {
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