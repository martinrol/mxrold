import React from 'react'
import { Home, About, Works, Contact, Footer } from '../components/'
import '../assets/styles/components/Main.css'

const Main = () => {
  return (
    <div className='Main'>
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main
