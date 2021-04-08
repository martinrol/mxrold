import React from 'react'
import Button from '../components/Button'
import '../assets/styles/components/NotFound.css'

const NotFound = () => {
  const textMessage = 'Volver al inicio'
  const rute = '/'

  return (
    <div className='NotFound'>
      <div className='NotFound__info'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione et blanditiis necessitatibus atque aliquid, veritatis vitae dicta officiis.</p>
      </div>
      <div className='NotFound__button'>
        <Button text={textMessage} rute={rute} />
      </div>
    </div>
  )
}

export default NotFound
