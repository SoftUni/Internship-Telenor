import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Create from './components/Create'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/create' component={Create} />
    <Route path='/render' render={props => (
      <div>From render</div>
    )} />
    <Redirect from='/about-us' to='/about' /> // redirects a route
    <Route render={props => (
      <h1>Page not found!</h1>
    )} /> // not path – matches *
  </Switch>
)

export default Routes
