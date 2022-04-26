import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mwqgq4w', 'template_44ti2o8', form.current, 'C0XH2SJ5jd9ja_xyb')
    alert("Email Enviado com Sucesso!")
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Vamos Conversar</h5>
      <h2>Entre em contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>devrafaelpdemelo@gmail.com</h5>
            <a href="mailto:devrafaelpdemelo@gmail.com" target="_blank">Envie um Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 81 998698587</h5>
            <a href="https://api.whatsapp.com/send?phone=+5581998698587" target="_blank">Envie uma mensagem no meu Whatsapp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua Messagem' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact