import React from 'react'
import { Skeleton , Typography } from '@mui/material'
 
const SkeletonComp = () => {
  return (
    <div sx={{width: '100%', display: 'flex',  justifyContent: 'center'}}>
        <Typography variant="h3" color="primary.superDark">Skeleton Component</Typography>
        <Skeleton  variant="text" width={200} sx={{m:3, marginLeft:"auto", marginRight:"auto"}}/>
        <Skeleton  variant="circular" width={50} height={50} sx={{m:3, marginLeft:"auto", marginRight:"auto"}}/>
        <Skeleton  variant="rectangular" width={200} height={150} sx={{m:3, marginLeft:"auto", marginRight:"auto"}}/>
        <Skeleton  variant="rounded" animation="wave" width={200} height={150} sx={{m:3, marginLeft:"auto", marginRight:"auto"}}/>
        <Skeleton  variant="string" sx={{m:3, marginLeft:"auto", marginRight:"auto"}} width={200} />
    </div>
  )
}

export default SkeletonComp;

// all other variant and examples are shown in Material-UI-V5.com 
