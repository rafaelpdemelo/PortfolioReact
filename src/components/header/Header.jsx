import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá✌️, eu sou</h5>
        <h1>Rafael Pereira</h1>
        <h5 className="text-light">Desenvolvedor Front-end</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Rolar para baixo</a>
      </div>
    </header>
  )
}

export default Header
