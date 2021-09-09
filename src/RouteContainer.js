import { useEffect, useLayoutEffect, useState } from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Components from './pages/Components/Components'
import { ThemeProvider, createTheme, CssBaseline, Typography, FormControl, Select, MenuItem, InputLabel, Paper, Switch as MuiSwitch } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getCarbodylab } from 'themes/packages/carbodylab'
import { getDriveway } from 'themes/packages/getdriveway'
import { getDracula } from 'themes/packages/dracula'
import { getMyTheme } from './theme'
import AppBarExample from './components/AppBar'

function RouteContainer() {
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') || 'purple')
  const [secondaryColor, setSecondaryColor] = useState(localStorage.getItem('secondaryColor') || 'green')
  const [themeName, setThemeName] = useState(localStorage.getItem('theme') || 'driveway')
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark')

  const getTheme = (name) => {
    if(name === 'driveway') {
      return createTheme(getDriveway(mode))
    }
    if(name === 'carbodylab') {
      return createTheme(getCarbodylab(mode))
    }
    if(name === 'dracula') {
      return createTheme(getDracula(primaryColor, secondaryColor))
    }
    if(name === 'my-theme') {
      return createTheme(getMyTheme(mode))
    }
  }
  const [currentTheme, setCurrentTheme] = useState(getTheme(localStorage.getItem('theme')))

  const handleChange = (event) => {
    setThemeName(event.target.value)
    localStorage.setItem('theme', event.target.value)
  }
  const handleDarkMode = () => {
    localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light')
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  const handlePrimaryColor = (e) => {
    localStorage.setItem('primaryColor', e.target.value)
    setPrimaryColor(e.target.value)
  }
  const handleSecondaryColor = (e) => {
    localStorage.setItem('secondaryColor', e.target.value)
    setSecondaryColor(e.target.value)
  }

  useEffect(() => {
    setCurrentTheme(getTheme(themeName))
  }, [themeName, mode])

  useEffect(() => {
    if(themeName === 'dracula') {
      setCurrentTheme(getTheme('dracula'))
    }
  }, [primaryColor, secondaryColor])

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <Paper style={{display: 'flex', flexDirection: 'column', position: 'fixed', top: '150px', right: '50px', borderColor: 'red', padding: '1rem 2rem 1.5rem 2rem', boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)'}}>
          <Typography variant='h5' style={{borderBottom: `2px solid ${currentTheme && currentTheme.palette.primary.main}`, marginBottom: '1.5rem'}}> Select your theme </Typography>
          <FormControl style={{width: '150px', margin: '0px auto'}}>
          <InputLabel>Theme Selection </InputLabel>
            <Select value={themeName} onChange={handleChange}>
              <MenuItem value='driveway'>Driveway</MenuItem>
              <MenuItem value='carbodylab'>Carbodylab</MenuItem>
              <MenuItem value='dracula'>Dracula</MenuItem>
              <MenuItem value='my-theme'>My theme</MenuItem>
            </Select>
        </FormControl>
        {themeName !== 'dracula' &&
          <div style={{margin: '1rem auto 0 auto', textAlign: 'center'}} >
            <MuiSwitch onChange={handleDarkMode} checked={mode === 'dark'} color='primary' /> Dark Mode
          </div>
        }
        {themeName === 'dracula' && <>
          <Typography variant='p' style={{marginTop: '1.5rem'}}> Dracula, heh? </Typography>
          <FormControl style={{width: '150px', margin: '1rem auto'}}>
            <InputLabel> Primary Color </InputLabel>
              <Select defaultValue={primaryColor} onChange={handlePrimaryColor}>
                <MenuItem value='blue'>Dracula Blue</MenuItem>
                <MenuItem value='red'>Dracula Red</MenuItem>
                <MenuItem value='green'>Dracula Green</MenuItem>
                <MenuItem value='orange'>Dracula Orange</MenuItem>
                <MenuItem value='pink'>Dracula Pink</MenuItem>
                <MenuItem value='yellow'>Dracula Yellow</MenuItem>
                <MenuItem value='purple'>Dracula Purple</MenuItem>
              </Select>
          </FormControl>
          <FormControl style={{width: '150px', margin: '1rem auto'}}>
            <InputLabel> Secondary Color </InputLabel>
              <Select defaultValue={secondaryColor} onChange={handleSecondaryColor} >
                <MenuItem value='blue'>Dracula Blue</MenuItem>
                <MenuItem value='red'>Dracula Red</MenuItem>
                <MenuItem value='green'>Dracula Green</MenuItem>
                <MenuItem value='orange'>Dracula Orange</MenuItem>
                <MenuItem value='pink'>Dracula Pink</MenuItem>
                <MenuItem value='yellow'>Dracula Yellow</MenuItem>
                <MenuItem value='purple'>Dracula Purple</MenuItem>
              </Select>
          </FormControl>
        </>}

        </Paper>
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
