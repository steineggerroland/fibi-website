<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">{{ $t('chat-example.title') }}</CardTitle>
            <CardText>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="success-subtle">
                        {{ $t('chat-example.task-calendar-sync.1-fibi') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages :author="$t('chat-example.you')">
                    <ChatBubble background-color="warning-subtle">
                        {{ $t('chat-example.task-calendar-sync.2-you') }}<br>{{ $t('chat-example.task-calendar-sync.3-you') }}
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="success-subtle">
                        {{ $t('chat-example.task-calendar-sync.4-fibi') }}
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>