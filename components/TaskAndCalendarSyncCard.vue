<template>
    <Card class="hover:-un-translate-y-1 hover:-un-translate-x-1 hover:-un-shadow-xl">
        <CardBody>
            <CardTitle border="bottom" border-width="4">
                <Anchor text-decoration="none" href="/#taskCalendarSync">{{ $t('card.task-calendar-sync.title') }}</Anchor>
            </CardTitle>
            <CardText text-color="body-secondary">
                {{ $t('card.task-calendar-sync.text') }}
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