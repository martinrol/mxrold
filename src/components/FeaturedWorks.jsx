import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/FeaturedWorks.css'

const FeaturedProjects = ({ image, title, description, build, github, url }) => {
  return (
    <div className="Works__item">
      <div className='Works__item--image'>
        <figure>
          <a href={github} target="_blank">
            <img src={image} alt='' />
          </a>
        </figure>
      </div>
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
            <a href={github}target="_blank">
              <AiFillGithub size='22px' />
            </a>
            <span />
            <a href={url} target="_blank">
              <BiWorld size='22px' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
