import React from 'react'
import Button from './Button'

import '../assets/styles/components/Home.css'

const Home = () => {
  const textMessage = 'Contacto'
  const rute = '/contacto'

  return (
    <section className='Home' id="Home">  
      <section class="Home__container--curve">
        <div class="Home__wave--curve"></div>
          <div className='Home__intro'>
            <h1>
              <span className='Home__intro--greeting'>Hola 👋, <br /> soy Martín Roldán, </span> <br />
              <span className='Home__intro--skill'>Frontend Developer</span>
            </h1>
            <p>Dedicado al area de desarrollo web. Autodidacta, estudiante de Platzi. Me encanta la tecnologia y aprender sobre nuevos temas. </p>
            <div className='Home__button'>
              <Button text={textMessage} rute={rute} />
            </div>
          </div>
      </section>
    </section>
  )
}

export default Home
