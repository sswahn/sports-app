import { lazy } from 'react'
//import { Router, Route } from '@sswahn/router'
import Router from './components/Router/Router'
import Route from './components/Router/Route'
import Drills from './components/Drills/Drills'
import CreateDrill from  './components/CreateDrill/CreateDrill'
import NotFound from './components/NotFound/NotFound'

//const CreateDrill = lazy(() => import('./components/CreateDrill/CreateDrill'))
//const NotFound = lazy(() => import('./components/NotFound/NotFound'))

const AppRouter = () => {
  return (
    <Router basePath="/sports-app">
      <Route path="/" component={Drills} />
      <Route path="/create-drill" component={CreateDrill} />
      <Route component={NotFound} /> 
    </Router>
  )
}

export default AppRouter
