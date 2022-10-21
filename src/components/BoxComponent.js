import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const BoxComponent = () => {
  return (
    <>
      <Box sx={{
        bgcolor:"primary.main",
        width:"30%",
        display:"inline-block",
        p:3,
        mb:2,
        color:"red",
        border:"2px yellow dashed"
      }}>
        <Typography variant="h2" color="#fff">BoxComponent</Typography>
        BoxComponent is Just Like Div you can add styling by using sx props etc
    </Box>
    <Box sx={{
        p:2,
        border:"1px dashed grey",
        width:"5%",
        display:"inline-block",
        ml:"2rem"
    }}>
        <Button>Save</Button>
    </Box>
    </>
  )
}

export default BoxComponent