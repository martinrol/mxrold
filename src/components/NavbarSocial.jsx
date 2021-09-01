import React from 'react'
import SocialMedia from './SocialMedia'
import '../assets/styles/components/NavbarSocial.css'


const NavbarSocial = () => {
    return (
        <div className="Navbar__social">
            <div className='Navbar__social--links'>
                <SocialMedia /> 
            </div>
        </div>
    )
}

export default NavbarSocial
