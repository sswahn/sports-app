import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import AppRouter from './AppRouter'
import Footer from './components/Footer/Footer'
import './index.css'

export default () =>
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <Header />
        <AppRouter />
        <Footer />
      </Provider> 
    </ErrorBoundary> 
  </React.StrictMode>
