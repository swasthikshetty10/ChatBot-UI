import React, { useState } from 'react';
import Widget from "./Widget"
function App() {
  const bot = { name: "EPAX", url: "https://cdn.discordapp.com/avatars/630686815736692746/89a1377032b7030586ba964485ca23fc.webp?size=1024", profile: "Swasthik's Assistant" }
  const [messages, setMessages] = useState([])
  const handleMessages = (newmessages, newmassage = null) => {
    const f = [...newmessages]
    setMessages(newmessages)

    BotMsg(f)
  }

  const BotMsg = async (messages) => {

    fetch('https://geek-jokes.sameerkumar.website/api')
      .then(response => response.json())
      .then(data => { setMessages([{ message: data, url: bot.url }, ...messages]) });
  }

  return (
    <div className="h-screen bg-gray-200 relative">
      <div className=" absolute flex bottom-2 right-2 sm:bottom-6 sm:right-6">

        <Widget className="bottom-0"
          style={{ height: '80vh', width: "370px", backgroundColor: "red" }}
          bot={bot}
          setMessages={handleMessages}
          messages={messages}

        />
      </div>
    </div>
  );
}

export default App;
