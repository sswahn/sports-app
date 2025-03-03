import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import Drills from './components/Drills/Drills'
import './index.css'

export default () =>
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <Header />
        <Drills />
      </Provider> 
    </ErrorBoundary> 
  </React.StrictMode>
