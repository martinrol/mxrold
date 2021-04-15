import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/FeaturedWorks.css'

const FeaturedProjects = ({ image, title, features, description, build }) => {
  return (
    <div className="Works__item">
      <div className='Works__item--image'>
        <figure>
          <a href='#'>
            <img src={image} alt='' />
          </a>
        </figure>
      </div>
      <div className='Works__item--info'>
        <h3>{title}</h3>
        <h4>{features}</h4>
        <div className='Works__item--info-box'>
          <p>{description}</p>
          <div className='Works__item--info-box-tools'>
            <ul>
              <li>{build}</li>
              <li>Example</li>
              <li>Example</li>
              <li>Example</li>
            </ul>
          </div>
          <div className='Works__item--info-box-links'>
            <a href='#'>
              <AiFillGithub size='22px' />
            </a>
            <span />
            <a href='#'>
              <BiWorld size='22px' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
