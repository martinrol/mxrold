import React from 'react'
import { Home, About, Works, Contact } from '../components/'
import '../assets/styles/components/Main.css'

const Main = () => {
    return (
        <div className="Main">
            <Home />
            <About />
            <Works />
            <Contact />
        </div>
    )
}

export default Main
