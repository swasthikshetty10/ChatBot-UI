import React , {useState} from 'react'
import Chat from "./Chat"
import Chatbutton from "./Chatbutton"
function Index() {
    const [isnotification, setNotification] = useState(true)
    const [notificationCount, setNotificationCount] = useState(1)
    return (
        <div className = "">
            <Chatbutton />
        </div>
    )
}

export default Index
