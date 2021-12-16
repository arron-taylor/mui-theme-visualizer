import React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { Paper, Grid, Container, Box } from '@mui/material'

export default function RadioExample() {
  const [value, setValue] = React.useState("female")

  const handleChange = (event) => {
    setValue((event.target).value)
  }

  return (
    <FormControl component="fieldset" style={{padding: '1rem'}}>
      <FormLabel component="legend" style={{padding: '1rem 0 0 0'}}>Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
  )
}
