export const theme = {
  palette: {
    mode: 'light',
    primary:{
      main:'#00838f',
      contrastText:'#fff'
    },
    secondary:{
      main:'#ff3d00',
    },
  },
}

export const theme_dark = {
  ...theme,
  palette: {
   mode: 'dark',
    primary:{
      main:'#00838f',
    },
    secondary:{
      main:'#00838f',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#00838f',
        }
      }
    }
  }
}

export const getMyTheme = (mode) => {
  const isDark = (mode === 'dark')
  return isDark ? theme_dark : theme
}
