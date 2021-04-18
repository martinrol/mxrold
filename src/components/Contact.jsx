import React from 'react'
import '../assets/styles/components/Contact.css'

const Contact = () => {
  return (
    <section className="Contact">
      <div className="Contact__info">
        <h2>Contactame</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat consectetur voluptatum fuga dolorum quam minus temporibus, eligendi inventore optio rerum! Quam inventore, eius numquam dolorem error deserunt minima?</p>
      </div>
      <div className="Contact__me">
        <form action="#">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="" placeholder="Nombre"/>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="" placeholder="Correo electrónico"/>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="" placeholder="Mensaje"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
