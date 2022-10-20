import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// if you want to change theme like change primary clr of button and go to default theme and then go to primary 
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { orange, red } from '@mui/material/colors';

// now default primary theme changed
const theme = createTheme({
  palette:{
    primary:{
      main:"#CCC",
      superDark:"#1976d2"
    },
    secondary:{
      main: orange[500]
    },
    myCustomColor:{
      main: red[400],
      superDark: red[800],
      superLight: red[100]
    }
  },
    // to make your own typography
    typography:{
      myTypography:{  //name it whatever you want
        color: orange[500],
        fontSize:"6rem"
      }
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

