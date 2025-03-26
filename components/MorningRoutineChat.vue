<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">{{ $t('chat-example.title') }}</CardTitle>
            <CardText>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">{{ $t('chat-example.morning-routine.1-fibi') }}<br>
                        {{ $t('chat-example.morning-routine.2-fibi') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages :author="$t('chat-example.you')">
                    <ChatBubble background-color="yellow-100">
                        {{ $t('chat-example.morning-routine.3-you') }}
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>