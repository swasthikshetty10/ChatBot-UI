import React , {useState} from 'react'
import { AnnotationIcon } from '@heroicons/react/solid'
function Chatbutton() {
    const [notification, setNotification] = useState(true)
    return (
        <div className = "cursor-pointer  flex items-center ">
            <div className="  justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
            <AnnotationIcon/>
            </div>

        </div>
    )
}

export default Chatbutton
 