import React, {useState} from 'react';
import './UseAi.scss';
import send from '../../assets/arrow.png'





function UseAi() {
  
  return (
    <div className='UseAi'>
      <div className="UseAi__container">
        <h1>Ask codeLearnAi a question ?</h1>
        <form action="">

          <div className="UseAi__Chat-log">
            <div className="UseAi__chat-message">
              <div className="UseAi__avatar">
              </div>
              <div className="Use__ai-message">
              </div>
            </div>
          </div>
          <textarea name="promp" id="" cols="1" rows="1" placeholder='Ask CodeLearnAi'></textarea>
          <button type='submit'>➡️</button>
        </form>
      </div>
    </div>
  )
}

export default UseAi