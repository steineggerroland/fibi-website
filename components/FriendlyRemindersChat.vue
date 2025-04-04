<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">{{ $t('chat-example.title') }}</CardTitle>
            <CardText>
                <ChatMessages :author="$t('chat-example.you')">
                    <ChatBubble background-color="warning-subtle">
                        {{ $t('chat-example.friendly-reminders.1-you') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Niva">
                    <ChatBubble background-color="success-subtle">
                        <em>{{ $t('chat-example.friendly-reminders.2-fairy') }}</em>
                    </ChatBubble>
                    <ChatBubble background-color="success-subtle">
                        {{ $t('chat-example.friendly-reminders.3-fairy') }}
                    </ChatBubble>
                </ChatMessages>
                <b-p text-alignment="start" data-aos="fade-right">{{ $t('chat-example.friendly-reminders.4-you') }}</b-p>
                <ChatMessages author="Niva">
                    <ChatBubble background-color="success-subtle">
                        {{ $t('chat-example.friendly-reminders.5-fairy') }}
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>