import React from 'react'
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import '../assets/styles/components/Home.css'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
    <section className="Home">
      <div className="Home__intro">
        <h1><span>Hola, <br /> soy Martín Roldán, </span> <br /> <span>Frontend Developer</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quod perferendis provident id dolore temporibus impedit.</p>
      </div>
      <div className="Home__social">
        <a href="#" target="_blank">
          <FiTwitter size="28px" />
        </a>
        <a href="#" target="_blank">
          <FiInstagram size="28px" />
        </a>
        <a href="#" target="_blank">
          <FiLinkedin size="28px" />
        </a>
        <a href="#" target="_blank">
          <FiGithub size="28px" />
        </a>
      </div>
      <div className="Home__button">
        <a href="/contacto">Contactame</a>
      </div>
    </section>
    </>
  )
}

export default Home
