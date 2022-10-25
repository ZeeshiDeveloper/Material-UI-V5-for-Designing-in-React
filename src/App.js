import './App.css';
import { Button, ButtonGroup, Typography } from '@mui/material'


// dtyling inside jsx first import styled and then create your custom styling
import { styled } from "@mui/material/styles";
import ThemeDark from './components/ThemeDark';
import MaterialIcons from './components/MaterialIcons';
import RatingStars from './components/RatingStars';
import Cards from './components/Cards';
import BoxComponent from './components/BoxComponent';
import SkeletonCom from './components/SkeletonCom';
import ListComp from './components/ListComp';
import AvaterComp from './components/AvaterComp';
import { Box } from '@mui/system';
import RadioButton from './components/RadioButton';
import TableComp from './components/TableComp';
import Tooltips from './components/Tooltips';
import DividerComp from './components/DividerComp';
import BackDrop from './components/BackDrop';
import Links from './components/Links';

function App() {

  // create your custom styles here by initializing var
  const MyCustomButton = styled(Button)(({theme}) => ({
    padding: theme.spacing(2) 
  }));

  // sx prop
  const test = true;
  // const test = false;
  return (
    <div className="App">
      {/* go to buttom api at the last of the page in chrome and then check all props there */}
       <h2>There are Three Variants Of Buttons</h2>
       <Button variant="text" color="secondary" size="small">MAterial UI V5 (Variant)</Button>
       <Button sx={{color:"primary.superLight"}} variant="contained">MAterial UI V5 (Contained)</Button>
       <Button color="error" variant="outlined">MAterial UI V5 (Outlined)</Button>
    <br />
    <br />
       <Typography>
        Typography use in MUI for headings paragraphs by changing variant property
       </Typography>
       <Typography variant='h3'>Heading By using Typography</Typography>

       {/* My own created typography inside createtheme index.js */}
       <Typography variant="myTypography" sx={{ m:4 }}>
        My own created typography inside createtheme index.js 
       </Typography>
       <br />

       {/* sx is basically inline styling */}
       <Button variant="contained" sx={{p:3, m:4, bg:"red"}}>XS</Button>
      <br />
      {/* My Custom Color */}
      <Typography variant="h2" sx={{color: "myCustomColor.superLight"}}>My Custom Color</Typography>
      <br />
      <MyCustomButton variant="contained">customButton</MyCustomButton>
      <br />
      <Typography variant='h3'>SX Prop</Typography>
      <Box sx={{display:"block",}}>
        <Button sx={[
          {
          padding:2,   //1 spacing = 4px (default spacing is 2) .. here 2 p is multiplied by 8 = 16px
          m:2,
          border:5,
          color:"primary.superDark"
          },
          test && {
            border:2,
            color:"myCustomColor.superDark",
            background:"transparent",
            borderColor:"myCustomColor.superDark",
            '&:hover':{
              backgroundColor:'myCustomColor.superLight'
            }
          },
          // for responsive
          {
            width:{
              xs:100,
              sm:200,
              md:300,
              lg:400,
              xl:500
            }
          }
        ]} variant="contained">SX Button</Button>
      </Box>


      {/* //Button Group */}
      <Box sx={{m:2,}}>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{m:2,}}>
        <ButtonGroup size="small" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{m:2,}}>
        <ButtonGroup variant="text">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{m:2,}}>
        <ButtonGroup orientation='vertical' variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      

      <br />
      <hr />
      <ThemeDark />
      <hr />
      <MaterialIcons />
      <hr />
      <RatingStars />
      <hr />
      <Cards />
      <hr />
      <BoxComponent />
      <hr />
      <SkeletonCom/>
      <hr />
      <ListComp />
      <hr />
      <AvaterComp />
      <hr />
      <RadioButton />
      <hr />
      <TableComp />
      <hr />
      <Tooltips />
      <hr />
      <DividerComp/>
      <hr />
      <BackDrop/>
      <hr />
      <Links/>
    </div>
  );
}

export default App;
