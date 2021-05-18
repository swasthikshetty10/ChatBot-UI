import React, { useState } from 'react'
import { EmojiHappyIcon } from '@heroicons/react/solid'

import styled from 'styled-components'


function Chat(props) {
    const [messages , setMessages] = useState([])
    // const [inputvalue , setInputvalue] = useState([])
    const MessageCard  = (props) => {
        console.log(props)
        return  props.sender ? <div className = " sender  flex items-end   mb-4 items-end justify-end">
                    <div className = "flex flex-col space-y-2 text-xs sm:text-s max-w-xs  mx-2 items-start">
                        <div><span className = "px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">{props.message}</span></div>
                    </div>
                        <img src= {props.url} alt="My profile" className = "w-6 h-6 rounded-full "/>
                    </div> 

                : <div className = "receiver  flex  items-end mb-4 ">
                    <img src= {props.url }  alt="My profile" className = "w-6 h-6 rounded-full "/>
                    <div className = "flex flex-col space-y-2 text-xs max-w-xs mx-2  items-start">
                        <div><span className = "px-4 py-2 rounded-lg   bg-gray-300 text-gray-600">{props.message}</span></div>
                    </div>
                    </div>
    }

    const submitHandler = (value  ) => {
        if (value) {
         setMessages([{ message : value , url : "https://picsum.photos/200/300", sender :" dasd"  } ,...messages]) 
         value = null
        }
    }
    return (
   
    <Wrapper className = "chat h-auto  flex flex-col flex-1 h-full bg-gray-100">
              <div className ="flex  justify-between sm:items-center py-3 border-b-2 border-gray-200">
              
         
         </div>

        

        <div className = "chat-message overflow-y-scroll overflow-x-hidden  px-2 flex flex-col-reverse   mx-3 flex-grow ">
            
            {messages.map((ele) => {
                return <MessageCard url = {ele.url}  message = {ele.message}  sender = {ele.sender}/>
            }) }
        </div>
        
        
         
        
        
       

        <form className = "flex-shrink border-t-4 border-gray-200  p-3 " onSubmit = { (event) => {event.preventDefault(); submitHandler(event.target[1].value ); event.target[1].value =""  }}>  
        <div className = "relative flex">
                <span className = "absolute inset-y-0 flex items-center">
                <button type="button" className = "inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <EmojiHappyIcon className = "outline h-6 w-6 text-gray-500"/>
                    </button>
                </span>
                <input type="text" placeholder="Write Something"  className = "w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-2 sm:py-3" />
                <div className = "absolute right-0 items-center inset-y-0  sm:flex">
                    <button type="submit" className = "inline-flex items-center justify-center rounded-full h-10 w-10 sm:h-12 sm:w-12 transition duration-500 ease-in-out text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className = "h-5 w-5 sm:h-6 sm:w-6 transform rotate-90">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                    </button>
                </div>
        </div>
        </form>
    </Wrapper>  
  
    )
}

export default Chat
const Wrapper = styled.div`
     .chat-message::-webkit-scrollbar {
    width: 0.15rem;
  }
   
  .chat-message::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
   
  .chat-message::-webkit-scrollbar-thumb {
    background-color: rgb(79,70,229);
    outline: 1px solid rgb(79,70,229);
  }
  
`