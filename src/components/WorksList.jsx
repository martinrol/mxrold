import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/WorksList.css'

const ListOfWorks = ({ number, title, build, github, url }) => {
  return (
    <div className='Works__projects--item'>
      <article className='Works__projects--item-container'>
        <div className='Works__projects--item-container-number'>
          <div className='Works__projects--item-container-number-circle'>
            {number}
          </div>
        </div>
        <div className='Works__projects--item-container-title'>
          <h3>{title}</h3>
        </div>
        <div className='Works__projects--item-container-tools'>
          <p>{build}</p>
        </div>
        <div className='Works__projects--item-container-links'>
          <a href={github} target="_blank" title="Enlace de Github">
            <AiFillGithub size='28px' />
          </a>
          <span />
          <a href={url} target="_blank" title="Enlace al sitio web">
            <BiWorld size='28px' />
          </a>
        </div>
      </article>
    </div>
  )
}

export default ListOfWorks
