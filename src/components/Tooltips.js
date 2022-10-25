import { Delete } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'

const Tooltips = () => {
  return (
    <Box>
        <Typography color="primary.superDark" variant="h3">Tooltips</Typography>

        {/* Tooltip is just like a comment when you hover over or click the button */}
        <Tooltip title="Delete">
            <IconButton>
                <Delete />
            </IconButton>
        </Tooltip>
        {/* Positioning in tooltips */}
        {/* Grid View */}
        <Typography variant="h4" color="secondary">Positioning in tooltips (Using Grid View)</Typography>
        <Grid container justifyContent="center">
            <Grid item>
                <Tooltip title="Add" placement='top-start'>
                    <Button>Top-Start</Button>
                </Tooltip>
                <Tooltip title="Add" placement='top'>
                    <Button>Top</Button>
                </Tooltip>
                <Tooltip title="Add" placement='top-end'>
                    <Button>Top-End</Button>
                </Tooltip>
            </Grid>
        </Grid>
        <Grid container justifyContent="center">
            <Grid item xs={6}>
                <Tooltip title="Add" placement='left-start'>
                    <Button>Left-Start</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement='left'>
                    <Button>Left</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement='left-end'>
                    <Button>Left-End</Button>
                </Tooltip>
            </Grid>
            <Grid item  xs={6}>
                <Tooltip title="Add" placement='right-start'>
                    <Button>Right-Start</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement='right'>
                    <Button>Right</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement='right-end'>
                    <Button>Right-End</Button>
                </Tooltip>
            </Grid>
        </Grid>
        <Grid container justifyContent="center">
            <Grid item>
                <Tooltip title="Add" placement='bottom-start'>
                    <Button>Bottom-Start</Button>
                </Tooltip>
                <Tooltip title="Add" placement='bottom'>
                    <Button>Bottom</Button>
                </Tooltip>
                <Tooltip title="Add" placement='bottom-end'>
                    <Button>Bottom-End</Button>
                </Tooltip>
            </Grid>
        </Grid>
        <br />
        <br />
        {/* Triggers */}
        <Grid container justifyContent="center">
            <Grid item>
                <Tooltip title="Add" disableFocusListener >
                    <Button variant="outlined" sx={{m:1}}>Hover or Tuoch</Button>
                </Tooltip>
                <Tooltip title="Add" disableHoverListener>
                    <Button variant="outlined" sx={{m:1}}>Focus ot touch</Button>
                </Tooltip>
                <Tooltip title="Add" disableFocusListener disableTouchListener>
                    <Button variant="outlined" sx={{m:1}}>Hover</Button>
                </Tooltip>
                <Tooltip title="Add" disableInteractive>
                    <Button variant="outlined" sx={{m:1}}>No interactive (cant tounch on title)</Button>
                </Tooltip>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Tooltips