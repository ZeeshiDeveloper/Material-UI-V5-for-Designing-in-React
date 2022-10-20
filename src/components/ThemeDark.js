import React from 'react'
import { CssBaseline, createTheme, ThemeProvider, Typography, Button, Paper } from '@mui/material' 
import { orange, red, blue, blueGrey, purple } from '@mui/material/colors'

const ThemeDark = () => {
// create your edited theme here
const theme2 = createTheme({
    spacing:4,  //default spacing is 4px and if you provide 2 for marginb or padding it will multiplied by spacing number 
    palette:{
        mode:"dark",
        primary:{
            main:blueGrey[300],
            superDark:blue[900],
            superLight:orange[300]
        },
        secondary:{
            main:"#9c27b0",
            superDark:purple[900],
        },
        customColorRed:{
            main:red[500],
            superDark:red[800],
            superLight:red[100],
        }
    },
    typography:{
        // fontSize:2,     font size of whole componenet
        h2:{
            fontSize:"5rem",
        },
        myVariant:{ //name it whatever you want this is custom typography 
             fontSize:8,
             lineHeight:5
        }
    }
})

  return (
    <ThemeProvider theme={theme2}>
        {/* <CssBaseline /> */}
        <Paper>
            <div>
                <Typography variant="h2" color="primary.superDark">Theme Dark Component</Typography>
                <Typography color="primary.superLight">There are Two Ways to use Dark theme</Typography>
                <Typography color="primary">1. Paper method is use to dark you div container only(wrap your react fragment with Paper)</Typography>
                <Typography color="primary">2. CssBaseline method is use to dark you all HTML page(write CssBaseline after themeprovider with self closing and comment out Paper element)</Typography>
                <Button variant="contained" 
                        sx={{
                            p:1,
                            m:3,
                            color:"customColorRed.main"}} color="secondary">
                    Hi Button   
                </Button>
                <Typography variant="myVariant"
                            sx={{display:"block"}}>My Custom Variant inside tyography</Typography>
            </div>
        </Paper>
    </ThemeProvider>
  )
}

export default ThemeDark



// bareynol.github.io/mui-theme-creator/
// this is usefull for MUI 