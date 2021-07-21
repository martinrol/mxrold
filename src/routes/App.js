import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { About, Works, Contact, TotalWorks } from '../components/'
import { Main, Blog, NotFound } from '../pages/'
import Layout from '../components/Layout'
import Curriculum from '../pages/Curriculum'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/acerca' component={About} />
        <Route exact path='/proyectos' component={Works} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contacto' component={Contact} />
        <Route exact path='/proyectos-lista' component={TotalWorks} />
        <Route exact path='/curriculum' component={Curriculum} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
