import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import CV_EN from '../files/cv-en-martin-david-roldan.pdf'
import Logo from '../assets/static/logo.svg'
import Vector from '../assets/static/background-works.svg'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
  const [ open, setOpen ] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <header className='Navbar'>
      <div className='Navbar__btn'>
        <button className='Navbar__btn--burger' type='button' onClick={handleClick} title="Abrir y cerrar menú">
          {open ? <FiX size='32px' /> : <FiMenu size='32px' />}
        </button>
      </div>
       <div className={open ? 'Navbar__container close' : 'Navbar__container open'} style={{  
          backgroundImage: `url(${Vector})`
        }}
        >
          <div className='Navbar__logo'>
            <figure>
              <a href='#home'>
                <img src={Logo} alt='Logo del sitio Mxrold' />
              </a>
            </figure>
          </div>
          <nav className='Navbar__links-nav'>
            <a href='#acerca'>Acerca</a>
            <a href='https://peiscof.com' target="_blank">Blog</a>
            <a href='#proyectos'>Proyectos</a>
            <a href='#contacto'>Contacto</a>
            <a className="Navbar__links--cv-button" href={CV_EN} target="_blank">Curriculum</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
