import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className='Header'>
        <div className="Header__logo">
            <img src={logo} alt="logo-codelearnai" />
        </div>
        <nav>
            <ul>
                {["Tutorial", "Usage", "Help"].map((item)=>(
                    <li key={item}><a href={`#${item}`}>{item}</a></li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Header;