import React, { useState, useEffect } from 'react'
import { Home, About, Works, Contact, Footer } from '../components/'

const Main = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const request = await fetch('https://api-mxrold-website.vercel.app/')
      const response = await request.json()
      setData(response)
    }

    getData()
  }, [])

  return (
    <>
      {
        data.length !== 0 && 
        <>
          <Home />
          <About skills={data.skills} courses={data.courses} />
          <Works featuredList={data.featuredList} worksList={data.worksList} totalWorks={data.totalWorks} />
          <Contact />
          <Footer />
        </>
      }
    </>
  )
}

export default Main
