import React from 'react'
import { RiShareBoxLine } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/WorksList.css'

const ListOfWorks = ({ img, title, build, github, url }) => {
  return (
    <div className='Works__projects--item'>
      <article className='Works__projects--item-container'>
        <figure className='Works__projects--item-container-image'>
          <img src={img} alt={title} title={`Imagen de ${title}`} loading="lazy" />
          <div className='Works__projects--item-container-links'>
            <a href={github} target="_blank" title="Enlace de Github">
              <AiFillGithub size='24px' />
            </a>
            <span />
            <a href={url} target="_blank" title="Enlace al sitio web">
              <RiShareBoxLine size='24px' />
            </a>
          </div>
        </figure>
        <div className='Works__projects--item-container-title'>
          <h3>{title}</h3>
        </div>
        <div className='Works__projects--item-container-tools'>
          <p>{build}</p>
        </div>
      </article>
    </div>
  )
}

export default ListOfWorks
