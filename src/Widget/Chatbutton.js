import React, { useState } from 'react'
import { AnnotationIcon } from '@heroicons/react/solid'
function Chatbutton(props) {

    // Message Count Display 
    const Notification = ({ amount, state }) => {
        return state ? <div className="bg-red-500 text-white  rounded-full p-0.5 text-xs "> <p>{amount}</p></div> : <></>
    }

    return (
        <div className="cursor-pointer  h-8 w-8 sm:h-10 sm:w-10 rounded-md hover:bg-indigo-700 bg-indigo-500 text-white relative ">
            <AnnotationIcon />
            <div className="absolute -top-2 -right-1 "><Notification amount={props.amount} state={props.setstate} /></div>
        </div>

    )
}

export default Chatbutton
