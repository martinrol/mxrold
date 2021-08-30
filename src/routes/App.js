import React from 'react'
import { Main, NotFound } from '../pages/'
import Layout from '../components/Layout'

const App = () => {
  const location = window.location.pathname
  
  return (
    <Layout>
      {
        location !== '/' ? <NotFound /> : <Main />
      }
    </Layout>
  )
}

export default App
