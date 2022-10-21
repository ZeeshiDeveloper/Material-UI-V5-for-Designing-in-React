import React from 'react'
import { createTheme, ThemeProvider, Card, Typography, CardActions, CardContent, Button,Paper, IconButton } from '@mui/material'

import { CardHeader, Avatar, CardMedia} from '@mui/material'
import  {MoreVert, Favorite, Share, ExpandMore} from '@mui/icons-material' 
import {red} from '@mui/material/colors'


const Cards = () => {
// create your edited theme here
const theme2 = createTheme({
    palette:{
        mode:"dark",
    }
})

  return (
    <ThemeProvider theme={theme2}>
        <Typography variant="h2" color="primary.superDark">Cards</Typography>
            <Card sx={{ width: 275, m:2, display:"inline-block"}}           variant="outlined">
                <Paper elevation={0} square>
                    <CardContent>
                        <Typography variant="h3">Basic Card</Typography>
                        <Typography variant="h5">World of the Day</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat?</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn more</Button>
                    </CardActions>
                </Paper>
            </Card>
            
            {/* Complex Interaction */}
            <Card sx={{ width: 275, m:2, display:"inline-block" }}     variant="outlined">
                <Paper elevation={0} square>
                    <CardHeader
                       avatar = {
                           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
                           }
                        action={
                            <IconButton aria-label="setting">
                                <MoreVert />
                            </IconButton>
                        } 
                        title="Complex Imnteraction"
                        subheader="Oct 21 2022"
                    />
                    <CardMedia 
                        component="img"
                        height="194"
                        image="https://mui.com/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Add To FAvrt">
                            <Favorite />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <Share />
                        </IconButton>
                        <IconButton  sx={{ml:"auto"}}
                        >
                            <ExpandMore/>
                        </IconButton>
                    </CardActions>
                </Paper>
            </Card>
    </ThemeProvider>
  )
}

export default Cards
