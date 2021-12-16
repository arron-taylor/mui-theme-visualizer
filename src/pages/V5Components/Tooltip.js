import React from "react"
import { makeStyles, Theme, createStyles } from "@mui/styles"
import AddIcon from "@material-ui/icons/Add"
import Fab from "@mui/material/Fab"
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    },
  })
)

export default function TooltipExample() {
  const classes = useStyles()

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}
