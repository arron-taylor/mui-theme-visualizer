export const carbodylabTheme = {
  palette: {
    common:{
      black:'#000',
      white:'#fff'
    },
    background:{
      paper:'#fff',
      default:'#f7f7f7'
    },
    primary:{
      light:'#33a0d7',
      main:'#0089CD',
      dark:'#005f8f',
      contrastText:'#fff'
    },
    secondary:{
      light:'#fff',
      main:'#fff',
      dark:'#ccc',
      contrastText:'#666'
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
      fontFamily: 'Gilroy',
    },
    h2: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontFamily: 'PlusJakartaText',
    },
    h3: {
      fontWeight: '700',
      fontFamily: 'Gilroy',
    },
    h4: {
      fontFamily: 'Gilroy',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 800,
      fontFamily: 'Gilroy',
    },
    h6: {
      fontWeight: 800,
      fontFamily: 'Gilroy',
    },
    p: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      fontFamily: 'PlusJakartaText',
    },
    caption: {
      fontSize: '14px'
    },
    button: {
      fontFamily: 'PlusJakartaText',
    }
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
    },
    MuiSelect: {
      MenuProps: {
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        }
      }
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 770,
      md: 1050,
      lg: 1250,
      xl: 1440,
    },
  },
}

export const carbodylabTheme_dark = {
  ...carbodylabTheme,
  palette: {
   // ...carbodylabTheme.palette,
   type: 'dark',
    primary:{
      light:'#33a0d7',
      main:'#0089CD',
      dark:'#005f8f',
      contrastText:'#fff'
    },
    secondary:{
      light:'#fff',
      main:'#fff',
      dark:'#ccc',
      contrastText:'#666'
    },
    background:{
      paper:'#424242',
      default:'#333'
    },
    text:{
      primary:'#fff',
      secondary:'rgba(74, 74, 74, 1)',
      disabled:'#aaa',
      hint:'rgba(0, 0, 0, 0.38)'
    },
  }
}

export const getCarbodylab = (mode) => {
  const isDark = (mode === 'dark')
  return isDark ? carbodylabTheme_dark : carbodylabTheme
}

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
  MuiSwitch: {
    track: {
      backgroundColor: '#6a6a6a',
    },
    colorPrimary: {
      '& .MuiSwitch-thumb': {
        color: carbodylabTheme.palette.primary.main,
      },
      "&$checked": {
        color: carbodylabTheme.palette.primary.main,
        '& .MuiSwitch-thumb': {
          color: carbodylabTheme.palette.primary.main
        }
      },
      '&$checked + $track': {
        backgroundColor: '#888',
      },
    },
    colorSecondary: {
      '& .MuiSwitch-thumb': {
        color: '#777',
      },
      "&$checked": {
        color: carbodylabTheme.palette.secondary.contrastText,
        '& .MuiSwitch-thumb': {
          color: '#333',
        }
      },
      '&$checked + $track': {
        backgroundColor: '#333',
      },
    }
  },
  MuiSelect: {
    icon: {
      color: carbodylabTheme.palette.primary.main,
    }
  },
  MuiInput: {
    underline: {
      '&:$before': {
        borderBottomColor: carbodylabTheme.palette.primary.main
      }
    }
  },
  MuiChip: {
    outlined: {
      borderColor: carbodylabTheme.palette.secondary.contrastText,
      borderWidth: '2px',
      color: carbodylabTheme.palette.secondary.contrastText,
      '& .MuiChip-icon': {
        color: carbodylabTheme.palette.secondary.contrastText,
      },
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme.palette.secondary.contrastText,
      }
    },
    outlinedPrimary: {
      borderColor: carbodylabTheme.palette.primary.main,
      borderWidth: '2px',
      color: carbodylabTheme.palette.primary.main,
      '& .MuiChip-icon': {
        color: carbodylabTheme.palette.primary.main,
      },
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme.palette.primary.main,
        '&:hover': {
          color: carbodylabTheme.palette.primary.dark,
        }
      }
    },
    outlinedSecondary: {
      borderColor: carbodylabTheme.palette.secondary.main,
      borderWidth: '2px',
      color: carbodylabTheme.palette.secondary.main,
      '& .MuiChip-icon': {
        color: carbodylabTheme.palette.secondary.main,
      },
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme.palette.secondary.main,
        '&:hover': {
          color: carbodylabTheme.palette.secondary.dark,
        }
      }
    },
    clickableColorPrimary: {
      color: carbodylabTheme.palette.primary.contrastText,
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme.palette.primary.contrastText,
      }
    },
    deletable: {
      '& .MuiChip-deleteIcon': {
        color: '#888',
        '&:hover': {
          color: '#666',
        }
      }
    },
    deletableColorPrimary: {
      color: carbodylabTheme.palette.primary.contrastText,
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme.palette.primary.contrastText,
      },
    },
  },
  MuiRadio: {
     colorSecondary: {
      "&$checked": {
        color: carbodylabTheme.palette.primary.main,
      }
    }
  },
  MuiTableCell: {
    head: {
      '& svg': {
        color: carbodylabTheme.palette.primary.dark,
      }
    },
    alignRight: {
      '& svg': {
        color: carbodylabTheme.palette.primary.dark,
      }
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
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: carbodylabTheme.palette.primary.main,
        color: carbodylabTheme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: carbodylabTheme.palette.primary.main,
        }
      }
    },
    button: {
      '&:$hover': {
        backgroundColor: carbodylabTheme.palette.primary.main,
        color: carbodylabTheme.palette.primary.contrastText,
        '& .MuiListItemIcon-root': {
          color: carbodylabTheme.palette.primary.contrastText,
        }
      },

    }
  },
  MuiListItemIcon: {
    root: {
      color: '#888'
    }
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: carbodylabTheme.palette.info.dark
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
      borderRadius: 2,
      '&$disabled': {
        color: carbodylabTheme.palette.text.disabled,
        border: `1px solid ${carbodylabTheme.palette.text.disabled}`,
      }
    },
    containedSizeSmall: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      fontSize: '1rem',
      borderRadius: 32,
    },
    containedSizeLarge: {
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      borderRadius: 32,
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
      '&$disabled': {
        color: carbodylabTheme.palette.text.disabled,
        border: `1px solid ${carbodylabTheme.palette.text.disabled}`,
      }
    },
    containedSecondary: {
      backgroundColor: '#666',
      color: '#fff',
    },
    outlinedSecondary: {
      color: '#666',
      borderColor: '#aaa',
      '&:hover': {
        borderColor: '#888',
        backgroundColor: '#fafafa'
      }
    },
    textSecondary: {
      color: '#666',
      '&:hover': {
        backgroundColor: '#fafafa'
      }
    }
  },
  MuiBottomNavigationAction: {
    root: {
      color: carbodylabTheme.palette.text.secondary,
      '&$selected': {
        color: carbodylabTheme.palette.primary.main,
        '&:hover': {
          backgroundColor: carbodylabTheme.palette.background.default
        }
      },
      '&:hover': {
        backgroundColor: carbodylabTheme.palette.background.default
      },
    },
  }
}

carbodylabTheme_dark.overrides = {
  MuiCheckbox: {
    root: {
      color: carbodylabTheme_dark.palette.primary.light,
    },
    colorSecondary: {
      "&$checked": {
        color: carbodylabTheme_dark.palette.primary.light,
      }
    }
  },
  MuiRadio: {
    colorSecondary: {
      color: carbodylabTheme_dark.palette.primary.light,
      opacity: .65,
      '&:hover': {
        color: carbodylabTheme_dark.palette.primary.light,
        opacity: 1
      },
     "&$checked": {
       color: carbodylabTheme_dark.palette.primary.light,
       opacity: 1
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
      backgroundColor: '#333',
      borderRadius: 2,
      color: carbodylabTheme_dark.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: '#222'
      },
      '&$disabled': {
        color: carbodylabTheme_dark.palette.text.disabled,
        border: `1px solid ${carbodylabTheme_dark.palette.text.disabled}`,
      }
    },
    containedSizeSmall: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      fontSize: '1rem',
      borderRadius: 32,
    },
    containedPrimary: {
      color: carbodylabTheme_dark.palette.primary.contrastText,
    },
    containedSecondary: {
      backgroundColor: carbodylabTheme_dark.palette.primary.contrastText,
      color: '#333'
    },
    containedSizeLarge: {
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      borderRadius: 32,
      '&:hover': {
        background: carbodylabTheme_dark.palette.primary.light,
      },
      '&:active': {
        background: carbodylabTheme_dark.palette.primary.dark,
      }
    },
    outlinedSizeLarge: {
      padding: '1rem 1.85rem',
      fontSize: '1.25rem',
      height: '2.25em',
      borderRadius: 32,
      lineHeight: 1.5,
      '&:hover': {
        background: carbodylabTheme_dark.palette.primary.main,
        color: carbodylabTheme_dark.palette.primary.contrastText,
      }
    },
    outlined: {
      padding: '.5rem .5rem',
      fontSize: '.65rem',
      borderRadius: 2,
      height: '2.25em',
      lineHeight: 1.5,
      color: carbodylabTheme_dark.typography.primary,
      borderColor: carbodylabTheme_dark.typography.primary,
      '&:hover': {
        background: 'rgba(10, 10, 10, 0.25)',
        color: carbodylabTheme_dark.palette.primary.titleText,
      },
      '&$disabled': {
        color: carbodylabTheme_dark.palette.text.disabled,
        border: `1px solid ${carbodylabTheme_dark.palette.text.disabled}`,
      }
    },

    outlinedPrimary: {
      color: carbodylabTheme_dark.palette.primary.light,
      borderColor: carbodylabTheme_dark.palette.primary.light
    },
    outlinedSecondary: {
      color: carbodylabTheme_dark.palette.secondary.light,
      borderColor: carbodylabTheme_dark.palette.secondary.light
    },
    text: {
      '&:hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.15)'
      }
    },
    textPrimary: {
      color: carbodylabTheme_dark.palette.primary.light,
      '&:hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.15)'
      }
    },
    textSecondary: {
      color: carbodylabTheme_dark.palette.secondary.light,
      '&:hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.15)'
      }
    },
  },
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: carbodylabTheme_dark.palette.primary.light,
        color: '#333',
        '&:hover': {
          backgroundColor: carbodylabTheme_dark.palette.primary.light,
        }
      }
    },
    button: {
      '&:$hover': {
        backgroundColor: carbodylabTheme_dark.palette.primary.light,
        color: '#333',
        '& .MuiListItemIcon-root': {
          color: carbodylabTheme_dark.palette.primary.dark.contrastText,
        }
      }
    }
  },
  MuiFormLabel: {
    root: {
      color: carbodylabTheme_dark.palette.text.primary,
      opacity: .75,
      '&$focused': {
        color: carbodylabTheme_dark.palette.text.primary,
      }
    },
  },
  MuiFormHelperText: {
    root: {
      fontSize: '12px',
      color: carbodylabTheme_dark.palette.text.primary,
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
  MuiSelect: {
    icon: {
      color: carbodylabTheme_dark.palette.primary.light,
    }
  },
  MuiInput: {
    underline: {
      '&:$before': {
        borderBottomColor: carbodylabTheme_dark.palette.primary.light,
        borderBottomWidth: '2px'
      },
      '&:$after': {
        borderBottomColor: carbodylabTheme_dark.palette.primary.light,
        borderBottomWidth: '2px'
      },
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
        borderColor: carbodylabTheme_dark.palette.primary.light,
      },
      '&$focused $notchedOutline': {
        borderColor: carbodylabTheme_dark.palette.primary.light,
        borderWidth: '2px'
      },
    },
  },
  MuiSwitch: {
    track: {
      backgroundColor: '#6a6a6a',
    },
    colorPrimary: {
      '& .MuiSwitch-thumb': {
        color: carbodylabTheme_dark.palette.primary.main,
      },
      "&$checked": {
        color: carbodylabTheme_dark.palette.primary.main,
        '& .MuiSwitch-thumb': {
          color: carbodylabTheme_dark.palette.primary.main
        }
      },
      '&$checked + $track': {
        backgroundColor: '#ccc',
      },
    },
    colorSecondary: {
      '& .MuiSwitch-thumb': {
        color: '#eee',
      },
      "&$checked": {
        color: carbodylabTheme_dark.palette.secondary.contrastText,
        '& .MuiSwitch-thumb': {
          color: '#eee',
        }
      },
      '&$checked + $track': {
        backgroundColor: '#ccc',
      },
    }
  },
  MuiTableCell: {
    head: {
      '& svg': {
        color: carbodylabTheme_dark.palette.primary.light,
      }
    },
    alignRight: {
      '& svg': {
        color: '#fff',
      }
    }
  },
  MuiSlider: {
    thumb: {

    },
    track: {
      backgroundColor: carbodylabTheme_dark.palette.primary.light
    },
    rail: {
      backgroundColor: carbodylabTheme_dark.palette.primary.light
    }
  },
  MuiTableRow: {
    root: {
      "&$selected": {
        backgroundColor: '#222',
        '&:hover': {
          backgroundColor: '#222'
        }
      },
      '&$hover:not($selected)': {
        '&:hover': {
          backgroundColor: carbodylabTheme_dark.palette.background.default,
        }
      },
    }
  },
  MuiBottomNavigationAction: {
    root: {
      color: carbodylabTheme_dark.palette.text.secondary,
      '&$selected': {
        color: carbodylabTheme_dark.palette.primary.light,
        '&:hover': {
          backgroundColor: carbodylabTheme_dark.palette.background.default
        }
      },
      '&:hover': {
        backgroundColor: carbodylabTheme_dark.palette.background.default
      },
    },
  },
  MuiChip: {
    outlinedPrimary: {
      borderColor: carbodylabTheme_dark.palette.primary.light,
      borderWidth: '2px',
      color: carbodylabTheme_dark.palette.primary.light,
      '& .MuiChip-icon': {
        color: carbodylabTheme_dark.palette.primary.light,
      },
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme_dark.palette.primary.light,
        '&:hover': {
          color: carbodylabTheme_dark.palette.primary.dark,
        }
      }
    },
    outlinedSecondary: {
      borderColor: carbodylabTheme_dark.palette.secondary.light,
      borderWidth: '2px',
      color: carbodylabTheme_dark.palette.secondary.light,
      '& .MuiChip-icon': {
        color: carbodylabTheme_dark.palette.secondary.light,
      },
      '& .MuiChip-deleteIcon': {
        color: carbodylabTheme_dark.palette.secondary.light,
        '&:hover': {
          color: carbodylabTheme_dark.palette.secondary.dark,
        }
      }
    },
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: carbodylabTheme_dark.palette.primary.main,
      color: '#fff'
    },
    action: {
      '& .MuiButton-textSizeSmall': {
        color: '#fff',
        '&:hover': {
          color: carbodylabTheme_dark.palette.primary.main
        }
      }
    }
  },
}