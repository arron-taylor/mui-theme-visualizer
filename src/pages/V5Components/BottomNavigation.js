import React from "react"
import { makeStyles } from "@mui/styles"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import { Paper, Grid, Container, Box } from '@mui/material'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
})

export default function BottomNavigationExample() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <Grid container className={classes.root}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      style={{width: '500px'}}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </Grid>
  )
}
