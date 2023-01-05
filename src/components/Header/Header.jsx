import React from 'react'

function Header() {
  return (
    <div className='Header'>
        <div className="Header__logo">
            CodeLearnAi
        </div>
        <nav>
            <ul>
                {["Home", "Tutorial", "Use", "Footer"].map((item)=>(
                    <li key={item} href={item}>{item}</li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Header;