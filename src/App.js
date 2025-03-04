import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import Drills from './components/Drills/Drills'
import Footer from './components/Footer/Footer'
import './index.css'

export default () =>
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <Header />
        <Drills />
        <Footer />
      </Provider> 
    </ErrorBoundary> 
  </React.StrictMode>
