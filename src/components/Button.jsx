import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.css'

const Button = ({ text, rute }) => {
  return (
    <Link className='btn-component' to={rute}>
      <span>{text}</span>
    </Link>
  )
}

export default Button
