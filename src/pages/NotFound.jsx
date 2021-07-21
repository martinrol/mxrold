import React from 'react'
import Button from '../components/Button'
import '../assets/styles/components/NotFound.css'

const NotFound = () => {
  const textMessage = 'Volver al inicio'
  const rute = '/'

  return (
    <div className='NotFound'>
      <div className='NotFound__info'>
        <h3>404 ¡Nada puede malir sal!</h3>
      </div>
      <div className='NotFound__button'>
        <Button text={textMessage} rute={rute} />
      </div>
    </div>
  )
}

export default NotFound
