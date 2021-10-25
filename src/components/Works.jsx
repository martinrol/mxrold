import React, {  useState} from 'react'
import FeaturedWorks from './FeaturedWorks'
import WorksList from './WorksList'
import TotalWorks from './TotalWorks'
import Vector from '../assets/static/background-works.svg'
import '../assets/styles/components/Works.css'

const Works = ({ featuredList, worksList, totalWorks }) => {
  const [ addProjects, setAddProjects ] = useState(false)
  const [ showLoader, setShowLoader ] = useState(false)
 
  const handleAddProjects = () => {
    if(addProjects === false) {
      setShowLoader(true)
      setTimeout(
        () => {
          setAddProjects(!addProjects)
          setShowLoader(false)
        },
        2000
      )
    } else {
      setAddProjects(false)
    }
  }

  return (      
    <section className='Works cover-background' id="proyectos" style={{  
      backgroundImage: `url(${Vector})`
    }}
    >
      <div className='Works__title'>
        <h2>Proyectos</h2>
      </div>

      {
        featuredList.map(item => (
          <FeaturedWorks key={item.id} {...item}/>
        ))
      }    

      <div className='Works__subtitle'>
        <h3>Lista de proyectos</h3>
      </div>

      <div className="Works__projects">
        {
          worksList.map((items) => (
            <WorksList key={items.id} {...items} />
          ))
        }
      </div>
      
      {
        showLoader === false
        ? null
        : <div className="pacman-loader">
            <div className="pacman-loader-items">
              <div>
                <div></div><div></div><div></div></div><div><div></div><div></div><div></div>
              </div>
            </div>
          </div>
      }

      {
        addProjects === false 
        ? null
        : <TotalWorks totalWorks={totalWorks} />
      }

      {
        showLoader
        ? null
        : <div className='Works__list'>
            <button className="btn-component" onClick={handleAddProjects}>{addProjects ? 'Ver menos proyectos' : 'Ver más proyectos' }</button>
          </div>
      }
    </section>
  )
}

export default Works
