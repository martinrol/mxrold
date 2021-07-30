import React from 'react'
import { RiShareBoxLine } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/FeaturedWorks.css'

const FeaturedProjects = ({ featuredList }) => {
  const { image, title, description, build, github, url } = featuredList
  return (
    <div className="Works__item">
      <div className='Works__item--image'>
        <figure>
          <img src={image} alt='Imagen del proyecto' />
        </figure>
      </div>
      <div className="Works__item--separator"></div>
      <div className='Works__item--info'>
        <h3>{title}</h3>
        <div className='Works__item--info-box'>
          <p>{description}</p>
          <div className='Works__item--info-box-tools'>
            <ul>
              <li>{build}</li>
            </ul>
          </div>
          <div className='Works__item--info-box-links'>
            {
              github === null
              ? null
              : <a href={github}target="_blank" title="Enlace de Github" >
                  <AiFillGithub size='24px' />
                </a>
            }
            {
              url === null
              ? null
              : <>
                <span />
                <a href={url} target="_blank" title="Enlace a la página web" >
                  <RiShareBoxLine size='24px' />
                </a>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
