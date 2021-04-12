import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
    <div className="btn-navbar">
      <button className='btn-navbar-burger' type='button' onClick={handleClick}>
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
                <li>Acerca</li>
              </Link>
              <Link to='/proyectos'>
                <li>Proyectos</li>
              </Link>
              <Link to='/blog'>
                <li>Blog</li>
              </Link>
              <Link to='/contacto'>
                <li>Contacto</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
