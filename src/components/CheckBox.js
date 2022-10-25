import { Bookmark, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'

const CheckBox = () => {
  return (
    <>
    <Box>
        <Typography variant='h3' color='primary.superDark'>CheckBox Component</Typography>
        {/* Basic CheckBox */}
        <Checkbox  defaultChecked/>
        <Checkbox />
        <Checkbox size="small"/>
        <Checkbox size="large" color="error"/>
        <Checkbox  color="secondary" />
        <Checkbox defaultChecked color="success" />
        <Checkbox defaultChecked color="default" />
        <Checkbox  disabled/>
        <Checkbox  disabled checked/>

        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
        <Checkbox icon={<Bookmark/>} checkedIcon={<Bookmark/>}/>
    </Box>
    <Box sx={{display:'inline-block'}}>
        <Typography variant="h5" sx={{textAlign:"left",color:"secondary.main",marginTop:3}}>Label and Label Positioning</Typography>
        {/* Lable and Label Positioning */}
        <FormGroup sx={{display:'inline-block'}}>
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
            <FormControlLabel disabled control={<Checkbox/>} label="Disable"/>
            <FormControlLabel control={<Checkbox/>} label="Top" labelPlacement='top'/>
            <FormControlLabel control={<Checkbox/>} label="Start" labelPlacement='start'/>
            <FormControlLabel control={<Checkbox/>} label="Bottom" labelPlacement='bottom'/>
            <FormControlLabel control={<Checkbox/>} label="End" labelPlacement='end'/>
        </FormGroup>
    </Box>
    </>
  )
}

export default CheckBox