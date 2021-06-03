import React from 'react'
import Button from './Button'
import '../assets/styles/components/Home.css'
import Cover from '../assets/static/cover.svg'

const Home = () => {
  const textMessage = 'Contacto'
  const rute = '/contacto'

  return (
    <>
      <span className='Cover__image' dangerouslySetInnerHTML={{__html: Cover}}></span>
      <section className='Home' id="Home">
        <div className='Home__intro'>
          <h1>
            <span className='Home__intro--greeting'>Hola 👋, <br /> soy Martín Roldán, </span> <br />
            <span className='Home__intro--skill'>Frontend Developer</span>
          </h1>
          <p>Dedicado al area de desarrollo web. Autodidacta, estudiante de Platzi. Me encanta la tecnologia y aprender sobre nuevos temas. </p>
        </div>
        <div className='Home__button'>
          <Button text={textMessage} rute={rute} />
        </div>
      </section>
    </>
  )
}

export default Home
