import React from 'react'
import CV_ES from '../files/cv-es-martin-david-roldan.pdf'
import CV_EN from '../files/cv-en-martin-david-roldan.pdf'
import '../assets/styles/components/Curriculum.css'

const Curriculum = () => {
    return (
        <div className="Curriculum">
            <h2>Visualizar curriculum en:</h2>
            <div className="Curriculum__links">
                <a href={CV_ES} target="_blank">Español</a>
                <a href={CV_EN} target="_blank">Inglés</a>
            </div>
        </div>
    )
}

export default Curriculum
