import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../assets/styles/components/Contact.css'

const Contact = () => {
  const [ value, setValue ] = useState(null)

  const onHandleSendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_mxrold', 'template_1cyjmfz', e.target, 'user_dRUN4n4ny7idTPbrdVRvs')
      .then((result) => {
          setValue(true)
          console.log(result.text)
      }, (error) => {
          setValue(false)
          console.log(error.text)
      });
      e.target.reset()
  }

  return (
    <section className="Contact">
      <div className="Contact__info">
        <h2>Contactame</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat consectetur voluptatum fuga dolorum quam minus temporibus, eligendi inventore optio rerum! Quam inventore, eius numquam dolorem error deserunt minima?</p>
      </div>
      <div className="Contact__me">
        <form onSubmit={onHandleSendEmail}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Nombre" required/>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" placeholder="Correo electrónico" required/>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" placeholder="Mensaje" required/>
          <button type="submit">Enviar</button>
          {/* {
            value === true &&  
          }
          {
          
            value === false && 
          } */}
        </form>
          
           
          
          
      </div>
    </section>
  )
}

export default Contact
