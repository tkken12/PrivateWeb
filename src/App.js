import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import routes from "routes/routePath"
import Redirection from 'views/redirection'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const getRoutes = ( routes ) => { 
    return routes.map( (prop, key ) => { 
      return ( 
        <Route 
          exact path = { prop.path }
          render = { ( props ) =>  <prop.component { ...props } /> }
          key = { key }
        />
      )
    })
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <main>
          <Header />
            <Switch> 
                    { getRoutes( routes ) } 
                    <Route path="*" component={ Redirection } ></Route>
            </Switch>
            
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
