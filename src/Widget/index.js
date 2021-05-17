import React , {useState} from 'react'
import Chat from "./Chat"
import Chatbutton from "./Chatbutton"
function Index() {
    const [isnotification, setNotification] = useState(true)
    const [notificationCount, setNotificationCount] = useState(1)
    return (
        <>
        <Chat/>
        <div className = "" onClick = {() => {} }>
            <Chatbutton setstate = {isnotification} amount = {notificationCount}  />
        </div>
        </>
    )
}

export default Index
