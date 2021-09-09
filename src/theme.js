export const theme = {
  palette: {
    type: 'light',
    primary:{
      main:'#ff9800',
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
   type: 'dark',
    primary:{
      main:'#ff9800',
    },
    secondary:{
      main:'#ff3d00',
    },
  }
}

export const getMyTheme = (mode) => {
  const isDark = (mode === 'dark')
  return isDark ? theme_dark : theme
}
