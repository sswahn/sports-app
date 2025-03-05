import { lazy } from 'react'
import { Router, Route } from '@sswahn/router'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Drills from './components/Drills/Drills'
const NotFound = lazy(() => import('./components/NotFound/NotFound'))

const AppRouter = () => {
  return (
    <Router lazyFallback={LoadingSpinner}>
      <Route path="/sports-app/" component={<Drills />} />
      <Route component={NotFound} /> 
    </Router>
  )
}

export default AppRouter
