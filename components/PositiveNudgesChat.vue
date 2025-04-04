<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">{{ $t('chat-example.title') }}</CardTitle>
            <CardText>
                <ChatMessages author="Niva">
                    <ChatBubble background-color="success-subtle">
                        {{ $t('chat-example.positive-nudges.1-fairy') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages :author="$t('chat-example.you')">
                    <ChatBubble background-color="warning-subtle">
                        {{ $t('chat-example.positive-nudges.2-you') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Niva">
                    <ChatBubble background-color="success-subtle">
                        <em>{{ $t('chat-example.positive-nudges.3-fairy') }}</em>
                    </ChatBubble>
                    <ChatBubble background-color="success-subtle">
                        {{ $t('chat-example.positive-nudges.4-fairy') }}
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>