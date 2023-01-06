import React, { useState } from "react";
import "./UseAi.scss";
import { FaRobot, FaUserAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

function UseAi() {
  const [input, setinput] = useState("");
  const [chatlog, setchatlog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newChatLog = [...chatlog, { user: "me", menssage: `${input}`} ]
    await setinput("");
    await setchatlog(newChatLog);

    const menssages = newChatLog.map((menssage)=>menssage.menssage).join("/n");
    const response = await fetch("http://localhost:3080/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menssage: menssages,
      })
    })
    const data = await response.json();
    await setchatlog([...newChatLog, { user: "bot", menssage: `${data.menssage}` }]);


  };

  return (
    <div className="UseAi" id="Usage">
      <div className="UseAi__container">
        <h1>Faz me uma pergunta <FaRobot/></h1>
        <div className="UseAi-box">
          <div className="UseAi-display">
          {chatlog.map((menssage, index)=>(
            <ChatMenssage menssage={menssage} key={index}/>
            ))}
            </div>
          <div>
            <form className="Use__ai-promp-container" onSubmit={handleSubmit}>
              <textarea
                name="promp"
                id=""
                cols="1"
                rows="1"
                onChange={(e) => setinput(e.target.value)}
                value={input}
                placeholder="Ask CodeLearnAi"
              />
              <button type="submit">
                <RiSendPlaneFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseAi;

const ChatMenssage = ({ menssage }) => {
  return (
    <div className="UseAi__Chat-log">
      <div className={`UseAi__chat-message`}>
        <div className={`UseAi__menssage-container ${menssage.user === 'bot' && "UseAi-bot"}`}>
          <div className="UseAi__avatar">
            {menssage.user ==='bot' ? <FaRobot/> : <FaUserAlt/>}
          </div>
          <div className="Use__ai-message">{menssage.menssage}</div>
        </div>
      </div>
    </div>
  );
};
