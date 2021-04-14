import React from 'react'
import FeaturedWorks from './FeaturedWorks'
import ListOfWorks from './ListOfWorks'
import '../assets/styles/components/Works.css'

const Works = () => {
  return (
    <section className="Works">
      <div className="Works__title">
        <h2>Proyectos destacados</h2>
      </div>

      <FeaturedWorks />

      <div className="Works__subtitle">
        <h2>Lista de proyectos</h2>
      </div>

      <ListOfWorks />

    </section>
  )
}

export default Works
