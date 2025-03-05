import { lazy } from 'react'
import { Router, Route } from '@sswahn/router'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Drills from './components/Drills/Drills'
import CreateDrill from  './components/CreateDrill/CreateDrill'
import NotFound from './components/NotFound/NotFound'

//const CreateDrill = lazy(() => import('./components/CreateDrill/CreateDrill'))
//const NotFound = lazy(() => import('./components/NotFound/NotFound'))

const AppRouter = () => {
  return (
    <Router lazyFallback={LoadingSpinner}>
      <Route path="sports-app/" component={Drills} />
      <Route path="sports-app/create-drill" component={CreateDrill} />
      <Route component={NotFound} /> 
    </Router>
  )
}

export default AppRouter
