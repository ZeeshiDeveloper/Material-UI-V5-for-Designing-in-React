import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const Links = () => {
  return (
    <Box>
        <Typography variant='h3' color='primary.superDark'>Links Component</Typography> 
        <Link href="" sx={{m:2}}>Link</Link>  
        <Link href="" color='inherit' sx={{m:2}}>Link</Link>  
        <Link href="" variant='h3' sx={{m:2}}>Link</Link>  
        <Link href="" underline='none' sx={{m:2}}>Link</Link>  
        <Link href="" underline='hover' sx={{m:2}}>Link</Link>

        <Link
            component="button"
            variant="body2"
            onClick={() => {
                alert("I'm a button.");
            }}
            sx={{m:2}}
            >
            Button Link
        </Link>  
    </Box>
  )
}

export default Links