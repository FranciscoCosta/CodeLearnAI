import React from 'react'
import './Tutorial.scss'
import tutorialImg from '../../assets/tutorial.png'
import question1 from '../../assets/question1.gif'
import { motion } from "framer-motion";


function Tutorial() {
  return (
    <div className='Tutorial' id='Tutorial'>
      <div className="Tutorial__container">
      <motion.div className="Tutorial__container-right">
        <h1><span>Como usar </span> CodeLearnAi</h1>
        <motion.img src={tutorialImg} alt="tutorialImg" 
                          whileInView={{ y: [200, 0], opacity: [0, 1] }}
                          transition={{ duration: 1 }}
        />
      </motion.div>
      <div className="Tutorial__container-left">
        <motion.div className="Tutorial__question" 
                                  whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{ duration: 2 }}
        >
        <h2>1º Faz uma pergunta sobre alguma dúvida que tenhas.</h2>
        <h2>2º Pede exercícios para treinar as tuas habilidades.</h2>
        <h2>3º Pede ajuda a resolver problemas.</h2>
        </motion.div>
        <motion.div className="Tutorial__example"
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        
        >
          <img src={question1} alt="example" />
        </motion.div>

      </div>

      </div>
    </div>
  )
}

export default Tutorial