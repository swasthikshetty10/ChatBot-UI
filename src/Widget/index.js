import React , {useState} from 'react'
import Chat from "./Chat"
import Chatbutton from "./Chatbutton"
function Index(props) {
    const [isnotification, setNotification] = useState(true)
    const [notificationCount, setNotificationCount] = useState(1)
    const [chat, setChat] = useState(false)

    return (
        <div className = " ">
        
        <div className = {chat ? "block" : "hidden" }>
        <div {...props}>
        <Chat/>
        </div>  
        </div>
        <div className = {!chat? "block" : "hidden"  + " bottom-1 right-1"} onClick = {() => {setChat(!chat)} }>
            <Chatbutton setstate = {isnotification} amount = {notificationCount}  />
        </div>
        </div>
    )
}

export default Index
