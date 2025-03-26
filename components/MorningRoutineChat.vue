<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">Chat Example</CardTitle>
            <CardText>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">Good morning!
                        🌅 Welcome to another sunny day. How are you feeling?<br>
                        Let's start the morning routine gently.
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="You">
                    <ChatBubble background-color="yellow-100">
                        Good morning! Do I have any important meetings?
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>