import React from 'react'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar__logo'>
        <figure>
          <a href='/'>Logo
            <img src='' alt='' />
          </a>
        </figure>
      </div>
      <div className='Navbar__links'>
        <nav className='Navbar__links-nav'>
          <ul>
            <a href='/acerca'>
              <li>Acerca</li>
            </a>
            <a href='/proyectos'>
              <li>Proyectos</li>
            </a>
            <a href='/blog'>
              <li>Blog</li>
            </a>
            <a href='/contacto'>
              <li>Contacto</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
