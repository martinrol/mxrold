import React  from 'react'
import { onHandleSendEmail } from '../utils/email'
import '../assets/styles/components/Contact.css'

const Contact = () => {
  return (
    <section className="Contact">
      <div className="Contact__info">
        <h2>Contactame</h2>
        <p>Llegaste hasta la parte de contacto 🚀... Espero que te hayan gustado mis proyectos. Si quieres darme alguna recomendación, charlar sobre diversos temas o ponerte en contacto conmigo puedes hacerlo mediante el formulario y también por las redes sociales. ¡Será un gusto conversar contigo!</p>
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
        </form>  
      </div>
    </section>
  )
}

export default Contact
