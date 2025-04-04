<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">{{ $t('chat-example.title') }}</CardTitle>
            <CardText>
                <ChatMessages author="Niva">
                    <ChatBubble background-color="success-subtle">{{ $t('chat-example.morning-routine.1-fairy') }}<br>
                        {{ $t('chat-example.morning-routine.2-fairy') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages :author="$t('chat-example.you')">
                    <ChatBubble background-color="warning-subtle">
                        {{ $t('chat-example.morning-routine.3-you') }}
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>