import React, { useState }  from 'react';
import Widget from "./Widget"
function App() {
  const bot ={ name : "EPAX" , url : "https://picsum.photos/200/300" , profile : "Swasthik's Assistant"}
  const [messages , setMessages] = useState([ ])
  const setMessage = (newmessages) => {
    setMessages(newmessages)
  }
  return (
    <div className="h-screen relative">
    <div  className=" absolute bottom-6 right-6">
    
      <Widget className = "bottom-0" 
      style={{ height: '80vh' , width : "400px" }} 
      bot = {bot} 
      setMessages = {setMessage}
      messages = {messages}
      />
    </div>
    </div>
  );
}

export default App;
