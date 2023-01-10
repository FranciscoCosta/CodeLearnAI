import React, { useState } from "react";
import "./UseAi.scss";
import { FaRobot, FaUserAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import usage from '../../assets/usage.png'

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
    <div className="UseAi" >
      <div className="UseAi__title">
      <h1 id="Usar">Code<span>Learn</span>Ai</h1>
          <img src={usage} alt="usage-img" />
      </div>
      <div className="UseAi__container">
        <div className="UseAi-box">
          <div className="UseAi-display">
          {chatlog.map((menssage, index)=>(
            <ChatMenssage menssage={menssage} key={index}/>
            ))}
            </div>
          <div className="UseAi-input-container">
            <form className="Use__ai-promp-container" onSubmit={handleSubmit}>
              <textarea
                name="promp"
                id=""
                cols="1"
                rows="1"
                onChange={(e) => setinput(e.target.value)}
                value={input}
                placeholder="Faz me uma pergunta ..."
              />
              <button type="submit">
                <RiSendPlaneFill color="var(--orange)" cursor="pointer"/>
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
