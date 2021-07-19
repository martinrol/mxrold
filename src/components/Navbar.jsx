import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  AiFillContacts,
  AiFillLayout,
  AiTwotoneMail,
  AiFillRead,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className='btn-navbar'>
        <button className='btn-navbar-burger' type='button' onClick={handleClick} title="Abrir y cerrar menú">
          {!open ? <FiX size='32px' /> : <FiMenu size='32px' />}
        </button>
      </div>
      <div className={!open ? 'Navbar close' : 'Navbar open'}>
        <div className='Navbar__logo'>
          <figure>
            <Link to='/'>
              <img src='https://i.ibb.co/64SY1G6/logo-mxrold.png' alt='Logo del sitio Mxrold' />
            </Link>
          </figure>
        </div>
        <div className='Navbar__links'>
          <nav className='Navbar__links-nav'>
            <ul>
              <Link to='/acerca'>
                <li>
                  <AiFillContacts size='22px' />
                  Acerca
                </li>
              </Link>
              <Link to='/proyectos'>
                <li>
                  <AiFillLayout size='22px' />
                  Proyectos
                </li>
              </Link>
              <Link to='/blog'>
                <li>
                  <AiFillRead size='22px' />
                  Blog
                </li>
              </Link>
              <Link to='/contacto'>
                <li>
                  <AiTwotoneMail size='22px' />
                  Contacto
                </li>
              </Link>
            </ul>
          </nav>
          <div className="Navbar__links--cv">
            <Link className="Navbar__links--cv-button" to="/curriculum">Curriculum</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
