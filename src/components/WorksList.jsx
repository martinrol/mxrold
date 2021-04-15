import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/WorksList.css'

const ListOfWorks = ({ number, title, build }) => {
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
          <a href='#'>
            <AiFillGithub size='28px' />
          </a>
          <span />
          <a href='#'>
            <BiWorld size='28px' />
          </a>
        </div>
      </article>
    </div>
  )
}

export default ListOfWorks
