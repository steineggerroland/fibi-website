<template>
    <Card class="hover:-un-translate-y-1 hover:-un-translate-x-1 hover:-un-shadow-xl">
        <CardBody>
            <CardTitle border="bottom" border-width="4">
                <NuxtLink text-decoration="none" :to="localePath('/#morningRoutine')">{{ $t('card.morning-routine.title') }}</NuxtLink>
            </CardTitle>
            <CardText text-color="body-secondary">
                {{ $t('card.morning-routine.text') }}
            </CardText>
        </CardBody>
    </Card>
</template>
<style scoped>
.card {
    transition: all 50ms ease-in-out;
}

.card:hover {
    box-shadow: 0.25em 0.25em 0 0 rgb(0 0 0/0.1), 0.125em 0.125em 0 0 rgb(0 0 0/0.1);
}
</style>
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>