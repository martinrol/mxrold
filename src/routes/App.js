import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Main, NotFound } from '../pages/'
import Layout from '../components/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
