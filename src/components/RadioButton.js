import React from 'react'
import { FormControlLabel, RadioGroup, Typography,FormControl,
    FormLabel,Radio,ThemeProvider,createTheme,Paper, Box } from '@mui/material'

const RadioButton = () => {
    const theme4 = createTheme({
        palette:{
            mode:"dark"
        }
    })
  return (
    <Box>
        <ThemeProvider theme={theme4}>
            <Typography variant="h3" color="primary.superDark">RadioButton</Typography>
            <Paper square elevation={8}>
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                    // Row      //for make it in row
                        name="radio-button-group"
                        defaultValue="female">
                        <FormControlLabel value="male" label="Male" control={<Radio/>} />
                        <FormControlLabel value="female" label="Female" control={<Radio/>} />
                        <FormControlLabel size="small" value="other" label="Other" control={<Radio/>} />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </ThemeProvider>
    </Box>
  )
}

export default RadioButton