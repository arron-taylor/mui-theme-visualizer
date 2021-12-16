import { useEffect, useState } from 'react'
import Dashboard from './pages/V5Dashboard/Dashboard'
import Components from './pages/V5Components/Components'
import { ThemeProvider, CssBaseline, Typography, FormControl, Select, MenuItem, InputLabel, Paper, Switch as MuiSwitch, ButtonGroup, Button } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import { getColorPicker } from './v5theme'
import { getMyTheme } from './v5theme/theme'
import { colours } from './tools'
import { Launch } from '@mui/icons-material'
import AppBarV5 from './components/AppBarV5'


export const MuiV5 = () => {
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') || 'purple')
  const [secondaryColor, setSecondaryColor] = useState(localStorage.getItem('secondaryColor') || 'green')
  const [themeName, setThemeName] = useState(localStorage.getItem('v5theme') || 'driveway')
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark')
  const { path } = useRouteMatch()

  const getTheme = (name) => {
    if (name === 'color-picker') {
      return createTheme(getColorPicker(mode, [primaryColor, secondaryColor]))
    }
    else {
      return createTheme(getMyTheme(mode))
    }
  }
  useEffect(() => {
    document.querySelectorAll('iframe') && document.querySelectorAll('iframe').forEach(e => e.remove())
  })

  const [currentTheme, setCurrentTheme] = useState(getTheme(localStorage.getItem('theme')))

  const handleChange = (event) => {
    setThemeName(event.target.value)
    localStorage.setItem('v5theme', event.target.value)
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
    setCurrentTheme(getTheme(themeName))
  }, [primaryColor, secondaryColor])

  useEffect(() => {
    document.querySelectorAll('iframe') && document.querySelectorAll('iframe').forEach(e => e.remove())
  })

  return <>
    <ThemeProvider theme={currentTheme}>
      <ButtonGroup color='primary' style={{position: 'fixed', top: '100px', right: '50px', }}>
        <Button variant='contained'  style={{display: 'flex', justifyContent: 'space-between'}} onClick={() => window.location = '/v4/components'}>
          V4 <Launch style={{fontSize: '20px', marginLeft: '1rem'}} />
        </Button>
      </ButtonGroup>
      <Paper style={{display: 'flex', flexDirection: 'column', position: 'fixed', top: '150px', right: '50px', borderColor: 'red', padding: '1rem 2rem 1.5rem 2rem', boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)'}}>
        <Typography variant='h5' style={{marginBottom: '1.5rem'}}> Select your theme</Typography>
        <FormControl style={{width: '150px', margin: '0px auto'}}>
          <InputLabel>Theme Selection </InputLabel>
            <Select label='theme selection' value={themeName} onChange={handleChange}>
              <MenuItem value='color-picker'>Color picker</MenuItem>
              <MenuItem value='my-theme'>My theme</MenuItem>
            </Select>
        </FormControl>
        <div style={{margin: '1rem auto 0 auto', textAlign: 'center'}} >
          <MuiSwitch onChange={handleDarkMode} checked={mode === 'dark'} color='primary' /> Dark Mode
        </div>

        {themeName === 'color-picker' && <>
        <Typography variant='p' style={{marginTop: '1.5rem'}}> Select Colors </Typography>
          <FormControl style={{width: '150px', margin: '1rem auto'}}>
            <InputLabel> Primary Color </InputLabel>
              <Select label='primary color' defaultValue={primaryColor} value={primaryColor} onChange={handlePrimaryColor}>

                {Object.keys(colours).map(item => {
                  return <MenuItem value={item}>{item}</MenuItem>
                })}

              </Select>
          </FormControl>
          <FormControl style={{width: '150px', margin: '1rem auto'}}>
            <InputLabel> Secondary Color </InputLabel>
              <Select label='secondary color' defaultValue={secondaryColor} value={secondaryColor} onChange={handleSecondaryColor} >
                {Object.keys(colours).map(item => {
                  return <MenuItem value={item}>{item}</MenuItem>
                })}
              </Select>
          </FormControl>
        </>}

      </Paper>

      <AppBarV5 />
      <CssBaseline />

    <Switch>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
      <Route path={`${path}/components`}>
        <Components />
      </Route>
    </Switch>

    </ThemeProvider>

  </>
}

