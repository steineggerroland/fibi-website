<template>
    <Card>
        <CardBody>
            <CardTitle border="bottom" border-width="4">Chat Example</CardTitle>
            <CardText>
                <ChatMessages author="You">
                    <ChatBubble background-color="yellow-100">
                        Remind me to add tasks and appointments after I pick up Jane from Kindergarten.
                    </ChatBubble>
                </ChatMessages>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        <em>Added appointment reminder</em>
                    </ChatBubble>
                    <ChatBubble background-color="purple-100">
                        I added the reminder for Jane's pickup appointmentments
                    </ChatBubble>
                </ChatMessages>
                <b-p text-alignment="start" data-aos="fade-right">...Pickup appointment is over...</b-p>
                <ChatMessages author="Fibi">
                    <ChatBubble background-color="purple-100">
                        You just picked up Jane from kindergarten. Are there any new tasks or appointments?
                    </ChatBubble>
                </ChatMessages>
            </CardText>
        </CardBody>
    </Card>
</template>