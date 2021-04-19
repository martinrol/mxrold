import React from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import '../assets/styles/components/Footer.css'

const Footer = () => {
    return (
        <section className="Footer">
            <a href="#Home" title="Volver al principio">
                <AiOutlineUp size="28px"/>
            </a>
        </section>
    )
}

export default Footer
