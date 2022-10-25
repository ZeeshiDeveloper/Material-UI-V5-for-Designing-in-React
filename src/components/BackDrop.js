import { Backdrop, Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useState } from 'react'

const BackDrop = () => {
  const [open, setOpen] = useState(false);
  const handleClose =() => {
    setOpen(false);
  }
  const handleToggle = () => {
    setOpen(!open);
  } 
  

  return (
    <Box>
        <Typography variant="h3" color="primary.superDark">BackDrop Component</Typography>
        <Button variant="outlined" onClick={handleToggle}>Show Backdrop</Button>
        <Backdrop
          sx={{color:'#fff',zIndex: (theme) => theme.zIndex.drawer + 1}}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
    </Box>
  )
}

export default BackDrop