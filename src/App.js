import { MuiV4 } from "./MuiV4";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { MuiV5 } from './MuiV5'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.querySelectorAll('iframe') && document.querySelectorAll('iframe').forEach(e => e.remove())
  })

  return (
    <Router>
      <Switch>
        <Route path='/v5'>
          <MuiV5 />
        </Route>
        <Route path='/v4'>
          <MuiV4 />
        </Route>
        <Route exact path='/'>
          <Redirect to='/v5/components' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
