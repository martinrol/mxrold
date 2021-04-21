import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  AiFillContacts,
  AiFillLayout,
  AiTwotoneMail,
  AiFillRead,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
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
            <Link to='/'>Logo
              {/* <img src='' alt='' /> */}
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
          <div className='Navbar__links--social'>
            <a href='#' target='_blank' title="Twitter">
              <AiFillTwitterSquare size='28px' />
            </a>
            <a href='#' target='_blank' title="Linkedin">
              <AiFillLinkedin size='28px' />
            </a>
            <a href='#' target='_blank' title="Github">
              <AiFillGithub size='28px' />
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
