import React from 'react'
import Button from './Button'
import FeaturedWorks from './FeaturedWorks'
import WorksList from './WorksList'
import { featuredList, worksList } from '../../api/works.json'
import '../assets/styles/components/Works.css'

const Works = () => {
  const textMessage = 'Ver mas'
  const rute = '/proyectos/listado'

  return (
    <section className='Works'>
      <div className='Works__title'>
        <h2>Proyectos destacados</h2>
      </div>

      {
        featuredList.map((items) => (
          <FeaturedWorks key={items.id} {...items}/>
        ))
      }

      <div className='Works__subtitle'>
        <h2>Lista de proyectos</h2>
      </div>

      <div className="Works__projects">
        {
          worksList.map((items) => (
            <WorksList key={items.id} {...items} />
          ))
        }
      </div>
      
      <div className='Works__list'>
        <Button text={textMessage} rute={rute} />
      </div>
    </section>
  )
}

export default Works
