import React from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import '../assets/styles/components/Footer.css'

const Footer = () => {
    return (
        <section className="Footer">
            <div className="Footer__circle">
                <div className="Footer__circle--link">
                    <a href="#Home" title="Volver al principio">
                        <AiOutlineUp size="28px"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer
