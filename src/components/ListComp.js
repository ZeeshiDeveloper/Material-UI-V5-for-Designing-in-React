import React from 'react'
import {List, ListItemButton,ListItem, ListItemIcon, ListItemText,
     Typography, Divider, createTheme, ThemeProvider, Paper, Box } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon  from '@mui/icons-material/Drafts';

const ListComp = () => {
    const theme3 = createTheme({
        palette:{
            mode:"dark"
        }
    })

  return (
    <Box sx={{display:"inline-block"}}>
        <ThemeProvider theme={theme3}>
            <Typography variant="h3" color="priamry.superDark">List Component</Typography>
            <Paper square>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="inbox"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon  />
                            </ListItemIcon>
                            <ListItemText primary="inbox"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Trash"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Span" secondary="Last List Item"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                
            </Paper>
        </ThemeProvider>    
    </Box>
  )
}

export default ListComp