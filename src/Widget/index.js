import React, { useState } from 'react'
import Chat from "./Chat"
import Chatbutton from "./Chatbutton"
function Index(props) {
    // States
    const [isnotification, setNotification] = useState(true)
    const [notificationCount, setNotificationCount] = useState(1)
    const [chat, setChat] = useState(false)
    const closeMessage = () => { setChat(!chat) }

    return (
        <div>
            {/* Chat Body */}
            <div className={chat ? "block " : "hidden"}>
                <div {...props}>
                    <Chat closeMessage={closeMessage} bot={props.bot} setMessages={props.setMessages} messages={props.messages} />
                </div>
            </div>
            {/* Chat Icon */}
            <div className={!chat ? "" : "hidden" + " bottom-1 right-1"} onClick={() => { setChat(!chat) }}>
                <Chatbutton setstate={isnotification} amount={notificationCount} />
            </div>
        </div>
    )
}

export default Index
