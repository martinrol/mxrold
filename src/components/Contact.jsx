import React, { useState }  from 'react'
import emailjs from 'emailjs-com'
import Email from '../assets/static/email.png'
import '../assets/styles/components/Contact.css'

const Contact = () => {
  const [ value, setValue ] = useState(false)
  const [ message, setMessage ] = useState('')

  const handleSendEmail = e => {
    e.preventDefault()
    
    emailjs.sendForm('service_mxrold', 'template_1cyjmfz', e.target, 'user_dRUN4n4ny7idTPbrdVRvs')
      .then((response) => {
        setValue(true)
        setMessage('¡Correo enviado! Estaré respondiendo a tu mensaje pronto 😄')
        setTimeout(() => {
          e.target.reset()
        }, 6000)
      }, (error) => {
          setValue(true)
          setMessage('🧟 Hubo un problema y no se envió el correo. Házmelo saber en mis redes sociales')
    });

    setTimeout(() => {
      setValue(false)
      setMessage('')
    }, 10000)
  }

  return (
    <section className="Contact" id="contacto">
      <figure className="Contact__image">
        <img src={Email} alt="" loading="lazy" />
      </figure>
      <div className="Contact__info">
          <h2>Contáctame</h2>
          <p>Llegaste hasta la parte de contacto 🚀... Espero que te hayan gustado mis proyectos. Si quieres darme alguna recomendación, charlar sobre diversos temas o ponerte en contacto conmigo puedes hacerlo mediante el formulario y también por las redes sociales. ¡Será un gusto conversar contigo!</p>
      </div>
      <div className="Contact__me">
        <form action="post" onSubmit={handleSendEmail}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Nombre" required/>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" placeholder="Correo electrónico" required/>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" placeholder="Mensaje" required/>
          <button type="submit">Enviar</button>
          {
            value &&
            <div className="Contact__me--alert">
              <p>{message}</p>
            </div>
          }
        </form>
      </div>
    </section>
  )
}

export default Contact
