import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.css'

const Button = ({ text, rute }) => {
  return (
    <div className='btn'>
      <Link to={rute}>
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default Button
