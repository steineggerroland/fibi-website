<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">{{ $t('chat-example.title') }}</CardTitle>
            <CardText>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        {{ $t('chat-example.positive-nudges.1-fibi') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages :author="$t('chat-example.you')">
                    <ChatBubble background-color="yellow-100">
                        {{ $t('chat-example.positive-nudges.2-you') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        <em>{{ $t('chat-example.positive-nudges.3-fibi') }}</em>
                    </ChatBubble>
                    <ChatBubble background-color="purple-100">
                        {{ $t('chat-example.positive-nudges.4-fibi') }}
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>