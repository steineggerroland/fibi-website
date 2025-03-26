<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">Chat Example</CardTitle>
            <CardText>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        Kai's birthday is upcoming. Is there something we could prepare for it?
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="You">
                    <ChatBubble background-color="yellow-100">
                        Oh, thanks for reminding me!<br>I need a present.
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        Should I add a task for this and block some time? Do you need help choosing a gift?
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>