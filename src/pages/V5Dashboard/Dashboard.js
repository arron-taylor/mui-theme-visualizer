import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@mui/styles"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { mainListItems, secondaryListItems } from "./listItems"
import Chart from "./Chart"
import Deposits from "./Deposits"
import Orders from "./Orders"
import NavBar from './NavBar'

const Dashboard = () => {
  const [drawerWidth, setDrawerWidth] = useState(240)

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
    },
    drawerPaper: {
      position: "static",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      flexGrow: 1,
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
  }))

  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <>
    <NavBar onDrawerButtonClick={() => drawerWidth == 240? setDrawerWidth(0) : setDrawerWidth(240) } />
    <div className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
    </>
  )
}

export default Dashboard