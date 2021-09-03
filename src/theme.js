import { createTheme, makeStyles } from '@material-ui/core'

export const carbodylabTheme = createTheme({
  palette: {
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
    error:{
      light:'#e57373',
      main:'#f44336',
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
  mixins: {
    toolbar: {
      minHeight: 64
    }
  },
  typography: {
    h1: {
      fontWeight: '700',
      lineHeight: 1.117,
      letterSpacing: '-0.01562em',
      fontFamily: 'Raleway',
    },
    h2: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontFamily: 'Open Sans',
    },
    h3: {
      fontWeight: '700',
      fontFamily: 'Raleway',
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 800,
      fontFamily: 'Raleway',
    },
    h6: {
      fontWeight: 800,
      fontFamily: 'Raleway',
    },
    p: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      fontFamily: 'Open Sans',
    },
    caption: {
      fontSize: '14px'
    },
  },
  props: {
    MuiAppBar: {
      elevation: 3,
      disableGutters: true
    },
    MuiFab: {
      disableElevation: true,
      disableRipple: true,
    },
    MuiButtonGroup: {
      disableElevation: true,
      disableRipple: true,
      size: 'small'
    },
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
      size: 'small'
    },
    MuiTextField: {
      variant: 'outlined',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 770,
      md: 1024,
      lg: 1215,
      xl: 1440,
    },
  },
})

carbodylabTheme.overrides = {
  MuiAppBar: {
    colorDefault: {
      backgroundColor: '#fff'
    }
  },
  MuiCheckbox: {
    root: {
      color: carbodylabTheme.palette.secondary.dark,
    },
    colorSecondary: {
      "&$checked": {
        color: carbodylabTheme.palette.primary.main,
      }
    }
  },
  MuiRadio: {
     colorSecondary: {
      "&$checked": {
        color: carbodylabTheme.palette.primary.main,
      }
    }
  },
  MuiSwitch: {
    track: {
      backgroundColor: '#6a6a6a',
    },
    colorSecondary: {
      "&$checked": {
        color: carbodylabTheme.palette.primary.main,
      },
      '&$checked + $track': {
        backgroundColor: '#aaa',
      },

    }
  },
  MuiTableRow: {
    root: {
      "&$selected": {
        backgroundColor: '#eee',
        '&:hover': {
          backgroundColor: '#eee'
        }
      },
      '&$hover:not($selected)': {
        '&:hover': {
          backgroundColor: carbodylabTheme.palette.background.default,
        }
      },
    }
  },
  MuiBackdrop: {
    root: {
      backgroundColor: 'none',
    }
  },
  MuiLinearProgress: {
    root: {
      backgroundColor: 'transparent'
    }
  },
  MuiBadge: {
    colorSecondary: {
      backgroundColor: carbodylabTheme.palette.primary.dark,
      color: carbodylabTheme.palette.primary.contrastText,
    }
  },
  MuiPaper: {
    elevation3: {
      boxShadow: '0 0 5px rgb(1 1 1 / 25%)'
    }
  },
  MuiContainer: {
    root: {
      border: '1px solid transparent',
      padding: '0 0 1rem 0rem'
    }
  },
  MuiFormHelperText: {
    root: {
      fontSize: '12px',
      contained: {
        fontSize: '12px'
      },
    },
    contained: {
      fontSize: '12px',
      marginLeft: '0px',
      '& p': {
        fontSize: '12px'
      }
    }
  },
  MuiOutlinedInput: {
    root: {
      position: 'relative',
      fontFamily: 'PlusJakartaText',
      '& $notchedOutline': {
        borderColor: '#dadada'
      },
      '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
        borderColor: carbodylabTheme.palette.primary.light,
      },
      '&$focused $notchedOutline': {
        borderColor: carbodylabTheme.palette.primary.main,
        borderWidth: '2px'
      },
    },
  },
  MuiBreadcrumbs: {
    root: {
    },
    ol: {
      '& .MuiTypography-colorInherit': {
        color: '#999'
      },
      '& .MuiTypography-colorTextPrimary': {
        border: `1px solid ${carbodylabTheme.palette.primary.light}`,
        color: carbodylabTheme.palette.primary.light,
        padding: '.15rem .35rem',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '3px',
        '&:hover': {
          cursor: 'pointer',
          border: `1px solid ${carbodylabTheme.palette.primary.dark}`,
          color: carbodylabTheme.palette.primary.dark,
        }
      }
    }
  },
  MuiBox: {
    root: {
      marginTop: '100px',
    }
  },
  MuiListItemIcon: {
    root: {
      color: '#888'
    }
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: carbodylabTheme.palette.primary.dark
    },
    action: {
      '& .MuiButton-textSizeSmall': {
        color: '#fff',
        '&:hover': {
          color: carbodylabTheme.palette.primary.main
        }
      }
    }
  },

  MuiButton: {
    root: {
      textTransform: 'capitalize',
    },
    contained: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      backgroundColor: carbodylabTheme.palette.primary.main,
      color: carbodylabTheme.palette.primary.contrastText,
      borderRadius: 2,
      '&:hover': {
        backgroundColor: carbodylabTheme.palette.primary.dark,
      },
    },
    containedSizeSmall: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      fontSize: '1rem',
      background: carbodylabTheme.palette.primary.main,
      color: carbodylabTheme.palette.primary.contrastText,
      borderRadius: 32,
      '&:hover': {
        background: carbodylabTheme.palette.primary.light,
      },
      '&:active': {
        background: carbodylabTheme.palette.primary.dark,
      }
    },
    containedSizeLarge: {
      [carbodylabTheme.breakpoints.between(0, 770)]: {
        padding: '1rem',
        fontSize: '1.2rem',
      },
      [carbodylabTheme.breakpoints.up('sm')]: {
        padding: '1em 2em',
        fontSize: '1.3rem',
      },
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      borderRadius: 32,
      '&:hover': {
        background: carbodylabTheme.palette.primary.light,
      },
      '&:active': {
        background: carbodylabTheme.palette.primary.dark,
      }
    },
    outlinedSizeLarge: {
      padding: '1rem 1.85rem',
      fontSize: '1.25rem',
      height: '2.25em',
      borderRadius: 32,
      lineHeight: 1.5,
      '&:hover': {
        background: carbodylabTheme.palette.primary.main,
        color: carbodylabTheme.palette.primary.contrastText,
      }
    },
    outlined: {
      padding: '.5rem .5rem',
      fontSize: '.65rem',
      borderRadius: 2,
      height: '2.25em',
      lineHeight: 1.5,
      color: carbodylabTheme.palette.primary.contrastText,
      borderColor: carbodylabTheme.palette.primary.contrastText,
      '&:hover': {
        background: carbodylabTheme.palette.primary.contrastText,
        color: carbodylabTheme.palette.primary.titleText,
      }
    },
  }
}

