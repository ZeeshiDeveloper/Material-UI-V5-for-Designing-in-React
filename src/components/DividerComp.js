import { Box, Paper, createTheme, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, ThemeProvider, Typography, Chip } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';

const DividerComp = () => {

    const theme5 = createTheme({
        palette:{
            mode:'dark'
        }
    })

    const content = (
        <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
        </div>
    )
  return (
    <>
      <Box sx={{display:'inline-block',width:'30%'}}>
        <ThemeProvider theme={theme5}>
         <Typography color="primary.superDark" variant='h3'>Divider Component</Typography>

       {/* list */}
       <Paper>
           <List>
            <ListItem button>
                <ListItemText primary='Inbox'/>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText primary='Inbox' secondary="Description"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemText primary='Inbox' secondary="Description"/>
            </ListItem>
           </List>
       </Paper>
     </ThemeProvider>
    </Box>
    
    {/* Divider Position */}
    <Box sx={{border:'2px solid #D3D3D3', display:'block',width:'30%',m:1,marginLeft:'auto',marginRight:'auto'}}>
        <ThemeProvider theme={theme5}>
            <Paper sx={{p:2}} square>
                <Divider>CENTER</Divider>
                {content}
                <Divider textAlign="left">LEFT</Divider>
                {content}
                <Divider textAlign="right">RIGHT</Divider>
                {content}
                <Divider>
                    <Chip label="CHIP"/>
                </Divider>
                {content}
            </Paper>
        </ThemeProvider>
    </Box>
    </>
  )
}

export default DividerComp