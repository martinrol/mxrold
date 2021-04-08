import React, { useState } from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
  const [ open, setOpen ] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <button className="btn-navbar" type="button" onClick={handleClick}>
        {!open ? <FiArrowDown size="26px"/> : <FiArrowUp size="26px"/>}
      </button>
      <div className={!open ? "Navbar close" : "Navbar open"}>
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
    </>
  )
}

export default Navbar
