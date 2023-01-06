import React from 'react'
import './Hero.scss'
import Header from '../Header/Header'

function Hero() {
  return (
    <div className='Hero' id='Hero'>
      <Header/>
      <div className="Hero__container">
        <h1>
        A melhor <span>App</span> no mercado para <span>aprender</span> a codar.
        {/* Simples , rápida e eficaz. */}
        </h1>
        <button>Começar</button>
      </div>
      <div className='Fade-out'> </div>
    </div>
  )
}

export default Hero;