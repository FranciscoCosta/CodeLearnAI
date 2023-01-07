import React from 'react'
import './Tutorial.scss'
import tutorialImg from '../../assets/tutorial.png'
import question1 from '../../assets/question1.gif'
function Tutorial() {
  return (
    <div className='Tutorial' id='Tutorial'>
      <div className="Tutorial__container">
      <div className="Tutorial__container-right">
        <h1><span>Como usar </span> CodeLearnAi</h1>
        <img src={tutorialImg} alt="tutorialImg" />
      </div>
      <div className="Tutorial__container-left">
        <div className="Tutorial__question">
        <h2>1º Faz uma pergunta sobre alguma dúvida que tenhas.</h2>
        <h2>2º Pede exercícios para treinar as tuas habilidades.</h2>
        <h2>3º Pede ajuda a resolver problemas.</h2>
        </div>
        <div className="Tutorial__example">
          <img src={question1} alt="example" />
        </div>

      </div>

      </div>
    </div>
  )
}

export default Tutorial