import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice"
import SaveIcon from "@material-ui/icons/Save"
import { Paper, Grid, Container, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  group: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginBottom: theme.spacing(2),
  },
}))

export default function ButtonsExample() {
  const classes = useStyles()

  return (
    <Grid container>

      <Grid item xs={6} className={classes.group}>
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
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </Grid>

      <Grid item xs={6} className={classes.group}>
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

      <Grid item xs={6} className={classes.group}>
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

      <Grid item xs={6} className={classes.group}>
        <Typography variant="h6" id="contained-buttons">
          Buttons with icons and label
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Grid>

    </Grid>
  )
}
