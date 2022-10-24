import React from 'react'
import {Avatar, AvatarGroup, Box, Typography, Badge } from '@mui/material'
import PageviewIcon from '@mui/icons-material/Pageview';
import { styled } from '@mui/material/styles';


const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 20,
    height: 20,
    border: `2px solid ${theme.palette.background.paper}`,
  }));


const AvaterComp = () => {
  return (
    <Box sx={{display:"inline-block"}}>
        <Typography variant="h3" color="primary.superDark">AvaterComp</Typography>
        <Avatar sx={{m:2}}>A</Avatar>    
        <Avatar sx={{m:2}} src="https://mui.com/static/images/cards/paella.jpg"></Avatar>
        <Avatar src="https://mui.com/static/images/cards/paella.jpg" sx={{m:2,width:"100px",height:'100px'}}></Avatar>
        <Avatar sx={{m:2}} width={50} height={50}>
            <PageviewIcon />
        </Avatar>

        {/* Avater Group */}
        <AvatarGroup max={4} sx={{m:2}}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
            <Avatar>E</Avatar>
        </AvatarGroup>

        {/* Avatar with badge */}
        <Badge
            overlap="circular"
            anchorOrigin={{vertical:"bottom", horizontal:"right"}}
            badgeContent={
                <SmallAvatar src="https://mui.com/static/images/cards/paella.jpg"/>
            }
        >
            <Avatar src="https://mui.com/static/images/cards/paella.jpg"></Avatar>
        </Badge>
    </Box>
  )
}

export default AvaterComp