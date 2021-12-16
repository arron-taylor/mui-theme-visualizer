import React from "react"
import { Grid } from "@mui/material"
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import GrainIcon from '@material-ui/icons/Grain'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'


function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function BreadCrumbsExample() {

  return (
    <div >
      <Grid container>
        <Grid item xs={4} style={{textAlign: 'center', margin: '0px auto'}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick} >
            <HomeIcon  />
            Material-UI
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
          >
            <WhatshotIcon />
            Core
          </Link>
          <Typography color="textPrimary" >
            <GrainIcon />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={4} style={{textAlign: 'center', margin: '0px auto'}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
          </Link>
          <Link
            color="textPrimary"
            href="/components/breadcrumbs/"
            onClick={handleClick}
            aria-current="page"
          >
            Breadcrumb
          </Link>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={4} style={{textAlign: 'center', margin: '0px auto'}}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>







    </div>
  )
}
