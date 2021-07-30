import React from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import SocialMedia from './SocialMedia'
import '../assets/styles/components/Footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__elements">
                <div className="Footer__elements--info">
                    <div className="Footer__elements--info-built">
                        <p>Diseñado y construido <br /> por Martín Roldán [mxrold] </p>
                    </div>
                    <div className="Footer__elements--info-links">
                        <SocialMedia />
                    </div>
                </div>
                <div className="Footer__elements--circle">
                    <div className="Footer__elements--circle-link">
                        <a href="#home" title="Volver al principio">
                            <AiOutlineUp size="18px"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
