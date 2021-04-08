import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, About, Works, Blog, Contact, NotFound } from '../pages/index'
import Layout from '../components/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/acerca' component={About} />
        <Route exact path='/proyectos' component={Works} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contacto' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
