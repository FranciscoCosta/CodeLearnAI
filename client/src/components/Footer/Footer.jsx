import React from 'react';
import './Footer.scss';
import openlogo from '../../assets/openai.png'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <div className='Footer' id='Ajuda'>
      <div className="Footer__container">
        <div className="Footer__contact">
          <div className="Footer__contact-container">
          <h1>Documentação OpenAI:</h1>
          <a href="https://openai.com/api/" target="__blank" ><img src={openlogo} alt="openai" /></a>

          </div>
          <div className="Footer__contact-container">
          <h1>Contacto:</h1>
          <p>francisco100eg@gmail.com</p>
          </div>
        </div>
        <div className='app__social'>
        <div>
            <BsLinkedin
            size={40}
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://www.linkedin.com/in/francisco-costa-dev/", "_blank");
      }}/>
        </div>
        <div>
            <BsGithub
            size={40}
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://github.com/FranciscoCosta", "_blank");
      }} 
            />
        </div>
        <div>
            <BsInstagram
            size={40}
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://www.instagram.com/tuga_no_brasil/", "_blank");
      }}/>
        </div>
    </div>
      <div className="copyright">
          <p className="p-text">2023 Francisco Costa</p>
          <p className="p-text">Todos os direitos reservados.</p>
        </div>

      </div>

    </div>
  )
}

export default Footer