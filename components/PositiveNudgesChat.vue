<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">Chat Example</CardTitle>
            <CardText>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        It's been a while since your last yoga session. How about a time slot for tomorrow?
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="You">
                    <ChatBubble background-color="yellow-100">
                        That sounds great. I just had a lot to do lately and forgot about it
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        <em>Added appointment "Yoga"</em>
                    </ChatBubble>
                    <ChatBubble background-color="purple-100">
                        Don't worry! That'll be a great new start tomorrow. I just reserved a free time slot.
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>