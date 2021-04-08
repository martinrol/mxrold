import React from 'react'
import buildImage from '../assets/static/build-site.svg'
import '../assets/styles/components/Blog.css'

const Blog = () => {
  return (
    <div className="Blog">
      <p>Todavía no hemos acabado por aquí..</p>
      <p>Gracias, vuelva prontos</p>
      <img src={buildImage} alt=""/>
    </div>
  )
}

export default Blog
