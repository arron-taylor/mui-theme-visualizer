import { colourNameToHex, getContrast } from "../tools"

export const colorPicker = {
  palette: {
    mode: 'light',
    common:{
      black:'#000',
      white:'#fff'
    },
    background:{
      paper:'#fff',
      default:'#fff'
    },
    primary:{
      light:'#b070c8',
      main:'#6f30a0',
      dark:'#55276C',
      contrastText:'rgba(247, 247, 247, 1)'
    },
    secondary:{
      light:'rgba(138, 138, 138, 1)',
      main:'rgba(74, 74, 74, 1)',
      dark:'rgba(51, 51, 51, 1)',
      contrastText:'#fff'
    },
    error:{
      light:'#e57373',
      main:'#de3b72',
      dark:'#d32f2f',
      contrastText:'#fff'
    },
    success: {
      main: '#008f77',
      dark: '#00614b',
      light: '#4fc0a6'
    },
    info: {
      main: '#24b1e4',
      dark: '#0081b2',
      light: '#6de3ff'
    },
    text:{
      primary:'rgba(54, 54, 54, 1)',
      secondary:'rgba(74, 74, 74, 1)',
      disabled:'rgba(0, 0, 0, 0.38)',
      hint:'rgba(0, 0, 0, 0.38)'}
    },
}


export const getColorPicker = (mode, [primary, secondary]) => {
  const primaryToHex = colourNameToHex(primary)
  const secondaryToHex = colourNameToHex(secondary)

  const isDark = (mode === 'dark')
  return isDark ?{ ...colorPicker_dark,
    palette: {
      ...colorPicker_dark.palette,

      primary: {
        main: primaryToHex,
      },
      secondary: {
        main: secondaryToHex
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: primaryToHex,
            color: getContrast(primaryToHex),
          }
        }
      }
    }
  } :

  { ...colorPicker,
    palette: {
      ...colorPicker.palette,
      primary: {
        main: primaryToHex
      },
      secondary: {
        main: secondaryToHex
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: primaryToHex,
            color: getContrast(primaryToHex),
          }
        }
      }
    }
  }
}

export const colorPicker_dark = {
  ...colorPicker,
  palette: {
   // ...colorPicker.palette,
   mode: 'dark',
    primary:{
      light:'#b070c8',
      main:'#6f30a0',
      dark:'#55276C',
      contrastText:'#eee'
    },
    secondary:{
      light:'rgba(138, 138, 138, 1)',
      main:'rgba(74, 74, 74, 1)',
      dark:'rgba(51, 51, 51, 1)',
      contrastText:'#fff'
    },
    background:{
      paper:'#424242',
      default:'#333'
    },
    text:{
      primary:'#fff',
      secondary:'#ccc',
      disabled:'#aaa',
      hint:'rgba(0, 0, 0, 0.38)'
    },
  }
}

colorPicker.components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: '#00838f',
      }
    }
  }
}


colorPicker_dark.components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: colorPicker_dark.palette.primary.main,
      }
    }
  }
}
