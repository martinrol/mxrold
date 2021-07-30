import React from 'react'
import '../assets/styles/components/Button.css'

const Button = ({ text, rute }) => {
  return (
    <a className='btn-component' href={rute}>
      <span>{text}</span>
    </a>
  )
}

export default Button
