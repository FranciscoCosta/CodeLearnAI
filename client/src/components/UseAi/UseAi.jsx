import React, { useState } from "react";
import "./UseAi.scss";
import { FaRobot, FaUserAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

function UseAi() {
  return (
    <div className="UseAi" id="Usage">
      <div className="UseAi__container">
        <h1>Ask codeLearnAi a question ?</h1>
        <form action="">
          <div className="UseAi__Chat-log">
            <div className="UseAi__chat-message">
              <div className="UseAi__menssage-container">
                <div className="UseAi__avatar">
                  <FaUserAlt size={20} />
                </div>
                <div className="Use__ai-message">Hello World</div>
              </div>
              <div className="UseAi__menssage-container UseAi-bot">
                <div className="UseAi__avatar">
                  <FaRobot size={20} />
                </div>
                <div className="Use__ai-message">Bot answer</div>
              </div>
            </div>
          </div>
          <div>
            <div className="Use__ai-promp-container">
              <textarea
                name="promp"
                id=""
                cols="1"
                rows="1"
                placeholder="Ask CodeLearnAi"
              ></textarea>
              <button type="submit">
                <RiSendPlaneFill />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UseAi;
