import { useEffect, useLayoutEffect, useState } from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Components from './pages/Components/Components'
import { ButtonGroup, Button, ThemeProvider, createTheme, CssBaseline, Typography, FormControl, Select, MenuItem, InputLabel, Paper, Switch as MuiSwitch } from '@material-ui/core'
import { Launch } from '@material-ui/icons'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { getMyTheme } from './v4theme/theme'
import AppBarExample from './components/AppBar'
import { getColorPicker } from './v4theme'
import { colours } from './tools'

export const MuiV4 = () =>  {
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') || 'purple')
  const [secondaryColor, setSecondaryColor] = useState(localStorage.getItem('secondaryColor') || 'green')
  const [themeName, setThemeName] = useState(localStorage.getItem('v4theme') || 'driveway')
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
    localStorage.setItem('v4theme', event.target.value)
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
    if(themeName === 'color-picker') {
      setCurrentTheme(getTheme('color-picker'))
    }
  }, [primaryColor, secondaryColor])

  return  <>
      <ThemeProvider theme={currentTheme}>
        <ButtonGroup color='primary' style={{position: 'fixed', top: '100px', right: '50px', }}>
          <Button variant='contained'  style={{display: 'flex', justifyContent: 'space-between'}} onClick={() => window.location = '/v5/components'}>
            V5 <Launch style={{fontSize: '20px', marginLeft: '1rem'}} />
          </Button>
        </ButtonGroup>
        <Paper style={{display: 'flex', flexDirection: 'column', position: 'fixed', top: '150px', right: '50px', borderColor: 'red', padding: '1rem 2rem 1.5rem 2rem', boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)'}}>
          <Typography variant='h5' style={{borderBottom: `2px solid ${currentTheme && currentTheme.palette.primary.main}`, marginBottom: '1.5rem'}}> Select your theme </Typography>
          <FormControl style={{width: '150px', margin: '0px auto'}}>

          <InputLabel>Theme Selection </InputLabel>
            <Select value={themeName} onChange={handleChange}>
              <MenuItem value='color-picker'>Color Picker</MenuItem>
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
      <CssBaseline />
      <AppBarExample />
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
