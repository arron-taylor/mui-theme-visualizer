import ButtonExample from './Button'
import AccordExample from './Accordion'
import AvatarExample from './Avatar'
import AlertExample from './Alert'
import BadgeExample from './Badge'
import AppBarExample from './AppBar'
import BottomNavigationExample from './BottomNavigation'
import ChipExample from './Chip'
import CheckboxesExample from './Checkboxes'
import FabExample from './FAB'
import CardExample from './Card'
import DialogExample from './Dialog'
import IconExample from './Icon'
import ListExample from './List'
import MenuExample from './Menu'
import ProgressExample from './Progress'
import RadioGroupExample from './RadioGroup'
import SelectExample from './Select'
import SliderExample from './Slider'
import SnackbarExample from './Snackbar'
import StepperExample from './Stepper'
import SwitchExample from './Switch'
import TableExample from './Table'
import TabsExample from './Tabs'
import TextFieldExample from './TextField'
import TypographyExample from './Typography'
import BreadCrumbsExample from './Breadcrumbs'
import { Paper, Grid, Container, Box, useTheme, } from '@material-ui/core'

const Components = () => {
  const theme = useTheme()

  return (
    <Box>
      <Container>
        <Paper style={{background: 'transparent', border: `2px solid ${theme.palette.background.paper}`, padding: '5rem 2.5rem'}}>
          <Grid container>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <AppBarExample />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <TableExample />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <ButtonExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <TextFieldExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <SelectExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <SliderExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <CheckboxesExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <SwitchExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <RadioGroupExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <DialogExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <AccordExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <AvatarExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <BadgeExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <BottomNavigationExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <ChipExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <FabExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <IconExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <ListExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <MenuExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <ProgressExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <SnackbarExample />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <AlertExample />
              </Paper>
            </Grid>

           {/* <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <StepperExample />
              </Paper>
            </Grid> **/}

            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <TabsExample />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <BreadCrumbsExample />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <CardExample />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper style={{margin: '2rem auto', textAlign: 'center'}}>
                <TypographyExample />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>

  )
}

export default Components