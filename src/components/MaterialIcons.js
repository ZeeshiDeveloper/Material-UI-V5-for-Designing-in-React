import React from 'react' 
import { Typography } from '@mui/material'  
import {Delete, DeleteOutlineOutlined} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const MaterialIcons = () => {
  return (
    <div>
        <Typography variant="h2" color="primary.superDark">MaterialIcons Component</Typography>
        <Delete color="error" fontSize='large'/>
        <Delete fontSize='large' sx={{color:"aqua"}}/>
        <DeleteOutlineOutlined fontSize='large' color='success'/>
        {/* Icon Buttons */}
        <Typography variant="h3" color="secondary">
            Icon Button<Typography sx={{display:"inline-block"}}>it Allows you to wrap your icon inside button</Typography>
        </Typography>
        <IconButton>
            <Delete fontSize='large' sx={{color:"aqua"}}/>
        </IconButton>
    </div>
  )
}

export default MaterialIcons