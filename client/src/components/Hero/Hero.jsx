import React from 'react'
import './Hero.scss'
import Header from '../Header/Header'
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className='Hero' id='Hero'>
      <Header/>


      <motion.div className="Hero__container"
            whileInView={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
      >
        <h1>
        A melhor <span>App</span> no mercado para <span>aprender</span> a codar.
        {/* Simples , rápida e eficaz. */}
        </h1>
        <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='#Usage';
              }}
        >Começar</button>
      </motion.div>
      <div className='Fade-out'> </div>
    </div>
  )
}

export default Hero;