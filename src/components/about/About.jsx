import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaHandshake} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Saiba mais</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>+2 Anos Estudando Front</small>
            </article>

            <article className='about__card'>
              <FaHandshake className='about__icon'/>
              <h5>Clientes</h5>
              <small>Já atendi mais de 10 clientes</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>Diversos projetos e estudos realizados!</small>
            </article>
          </div>

          <p>
          Olá! Meu nome é Rafael Pereira e tenho uma grande afinidade com desenvolvimento front-end. Como desenvolvedor, considero um bom produto aquele que permite criar uma experiência emocional com as pessoas que as usam. 

No meu processo criativo utilizo diversas ferramentas como HTML, CSS, JS, Frameworks como ReactJS e diversos outros aparatos que me ajudam no fluxo de trabalho.
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About