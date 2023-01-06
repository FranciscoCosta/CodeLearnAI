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
                {["Home", "Tutorial", "Usage", "Help"].map((item)=>(
                    <li key={item} href={item}>{item}</li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Header;