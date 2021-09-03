import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Components from './pages/Components/Components'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { carbodylabTheme } from './theme'
import AppBarExample from './components/AppBar'

function RouteContainer() {
  return (
    <Router>
      <ThemeProvider theme={carbodylabTheme}>
      <CssBaseline />
      <AppBarExample />
      <Switch>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/components'>
          <Components />
        </Route>
        <Route exact path='/'>
        </Route>
      </Switch>
      </ThemeProvider>

   </Router>
  )
}

export default RouteContainer
