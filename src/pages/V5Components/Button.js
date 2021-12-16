import React from "react"
import { Typography, Button, Grid } from "@mui/material"

export default function ButtonExample() {

  return <Grid container>

      <Grid item xs={6} >
        <Typography variant="h6" id="contained-buttons">
          Contained Buttons
        </Typography>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" >
          Link
        </Button>
      </Grid>

      <Grid item xs={6} >
        <Typography variant="h6" id="contained-buttons">
          Text Buttons
        </Typography>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#text-buttons">
          Link
        </Button>
      </Grid>

      <Grid item xs={6} >
        <Typography variant="h6" id="contained-buttons">
          Outlined Buttons
        </Typography>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </Grid>

      <Grid item xs={6} >
        <Typography variant="h6" id="contained-buttons">
          Buttons with icons and label
        </Typography>
        <Button
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="default"
        >
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
        >
          Save
        </Button>
      </Grid>

    </Grid>
}
