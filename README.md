# mui-theme-visualizer (made with Create-React-App for MUI v4)
All of the material-ui components on one page. Nothing unnecessary. Easily make your theme (with dark mode too!) in the theme.js file and see how it affects every mui component right away.

My goal: 
  - I set out to make a material ui theme, but all of the websites I found online to help create a theme were extremely bloated with tons of tools that I did not need. 
  - I could not find a simple list of all the material-ui react components to work with, and this bothered me, so I decided to put this out there for everyone. Feel free to use what you need and copy anything you want. 
I hope this should be enough to get you off and started in making your own theme. Feel free to follow the same set up I have in your production projects :)


How to use:
  1. Clone this project onto your computer <code> git clone https://github.com/arron-taylor/mui-theme-visualizer.git </code>
  2. Enter the project directory on your computer in your terminal (<code> cd  ./mui-theme-visualizer </code>) and run either <code> yarn install</code> or <code> npm install</code> to install the dependencies 
  3. After dependencies have finished installing, run <code> yarn start</code> inside of the ./mui-theme-visualizer directory to start the development server
  4. Create your theme within the /src/theme.js file with the following architecture (You can see how this file is already set up to get an idea of how to make yours): <a href="https://next.material-ui.com/customization/default-theme/"> default material-ui theme </a> 
  5. Select your theme from the Select dropdown list inside of the floating box on the right side of the screen to see the components change theme.

Architecture
  1. You'll notice <code>getMyTheme</code> is exported from theme.js, this is set up for easy light/dark mode switching.
  2. If you intend to use a light and dark mode for your themes, set your light mode in the object <code>theme</code> and set your dark mode in the object <code>theme_dark</code> within the theme.js file. <br /><i>If you do not intend to use a dark mode, only allow <code>getMyTheme</code> inside of theme.js to return <code>theme</code></i>
  3. Inside of RouteContainer.js the material-ui <code>ThemeProvider</code> component is passed a <code>createTheme()</code> object from the <code>getTheme()</code> function whenever it is called. 
  4. <code>getTheme()</code> is called inside of useEffect as a side effect of the <code>theneName</code> or <code>mode</code> being changed by the user via the Switch or the Select dropdown. <code>getTheme()</code> is used to set the current state of the theme that is passed to <code>ThemeProvider</code>
<br />
<i> I am open to PR's if anyone wants to add on to this! Of course, the less bloat the better. </i>
<br />
<br />

<img src="https://i.imgur.com/f90a7mM.png" />

<br /> 
<img src="https://i.imgur.com/aIOfR2v.png" />
<br /> 
<img src="https://i.imgur.com/DspzgkP.png" />

# List of Material-ui Components on the Components Page:
  - Accordion
  - AppBar
  - Avatar
  - Alert
  - Badge
  - Button
  - Breadcrumbs  
  - BottomNavigation
  - Card
  - Chip
  - Checkboxes
  - Dialog
  - FAB
  - Icon
  - List
  - Menu
  - Progress
  - RadioGroup
  - Select
  - Slider
  - Snackbar
  - Stepper
  - Switch
  - Table
  - Tabs
  - TextField
  - Typography

# PS Checkout the Dashboard too!
<img src="https://i.imgur.com/YhsgEhK.png" />
