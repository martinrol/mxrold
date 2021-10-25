import React from 'react'
import TotalWorksList from './TotalWorksList'
import Image from '../assets/static/logo-work-table.png'
import '../assets/styles/components/TotalWorks.css'

const TotalWorks = ({ totalWorks }) => {
    return (
        <>  
            <section className="TotalWorks">
                <div className="separator-table">
                    <img src={Image} alt="Imagen de fondo" />
                </div>
                <div className="TotalWorks__categories">
                    <p>#</p>
                    <p>Título</p>
                    <p>Construido</p>
                    <p>Enlaces</p>
                </div>
                {
                    totalWorks.map((item) => (
                        <TotalWorksList key={item.id} {...item} />
                    ))
                }
            </section>
        </>
    )
}

export default TotalWorks
