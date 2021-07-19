import React from 'react'
import CV from '../files/cv.pdf'
import '../assets/styles/components/Curriculum.css'

const Curriculum = () => {
    return (
        <div className="Curriculum">
            <h2>Visualizar curriculum en:</h2>
            <div className="Curriculum__links">
                <a href={CV} target="_blank">Español</a>
                <a href={CV} target="_blank">Inglés</a>
            </div>
        </div>
    )
}

export default Curriculum
