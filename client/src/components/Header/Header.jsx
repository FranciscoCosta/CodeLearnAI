import React, {useState} from 'react'
import './Header.scss'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';



function Header() {

    const [menu, setMenu] = useState(false)
  return (
    <div className='Header'>
        <div className="Header__logo">
            {!menu && <img src={logo} alt="logo-codelearnai" />}
        </div>
        <nav>
            <ul className='Header__container'>
                {["Tutorial", "Usar", "Ajuda"].map((item)=>(
                    <li key={item}><a href={`#${item}`}>{item}</a></li>
                ))}
            </ul>
            <div className="Header__mobile">
                <button onClick={()=>setMenu(!menu)}>{menu ? <GrClose color='var(--orange)'/> : <GiHamburgerMenu color='var(--orange)'/>}</button>
                {menu && <ul className='Header__container-mobile'>
                {["Tutorial", "Usar", "Ajuda"].map((item)=>(
                    <li key={item}><a href={`#${item}`}>{item}</a></li>
                ))}
            </ul>}
            </div>
        </nav>
    </div>
  )
}

export default Header;