import React from 'react'
import { Home, About, Works, Contact, Footer } from '../components/'
import '../assets/styles/components/Main.css'

const Main = () => {
  return (
    <main className='Main'>
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  )
}

export default Main
