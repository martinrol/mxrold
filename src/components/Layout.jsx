import React from 'react'
import Navbar from './Navbar'
import NavbarSocial from './NavbarSocial'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <NavbarSocial />
    </>
  )
}

export default Layout
