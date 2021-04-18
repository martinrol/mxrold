import React from 'react'
import TotalWorksList from './TotalWorksList'
import { totalWorks } from '../../api/works.json'
import '../assets/styles/components/TotalWorks.css'

const TotalWorks = () => {
    return (
        <section className="TotalWorks">
            <div className="TotalWorks__title">
                <h2>Lista de proyectos</h2>
                <p>Varios proyectos que realice a lo largo del tiempo</p>
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
    )
}

export default TotalWorks