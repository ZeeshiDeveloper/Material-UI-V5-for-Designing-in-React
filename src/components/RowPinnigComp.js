import * as React from 'react';
import { DataGrid  } from '@mui/x-data-grid';
import { Box } from '@mui/material'


const rows = [
    {id:1,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:2,name: 'Zeeshan', city: 'Lahore',username:"Zeeshan123",email:"Zeeshan123@gmail.com",age:23},
    {id:3,name: 'Mohsin', city: 'Lahore',username:"Mohsin123",email:"Mohsin123@gmail.com",age:24},
    {id:4,name: 'Hassan', city: 'Lahore',username:"Hassan123",email:"Hassan123@gmail.com",age:25},
    {id:5,name: 'Malik', city: 'Lahore',username:"Malik123",email:"Malik123@gmail.com",age:26},
    {id:6,name: 'Ismail', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:27},
    {id:7,name: 'Mussa', city: 'Lahore',username:"Mussa123",email:"Mussa123@gmail.com",age:28},
    {id:8,name: 'Issa', city: 'Lahore',username:"Issa123",email:"Issa123@gmail.com",age:29},
    {id:9,name: 'Waqas', city: 'Lahore',username:"Waqas123",email:"Waqas123@gmail.com",age:20},
    {id:10,name: 'Saqib', city: 'Lahore',username:"Saqib123",email:"Saqib123@gmail.com",age:21},
    {id:11,name: 'Ahmad', city: 'Lahore',username:"Ahmad123",email:"Ahmad123@gmail.com",age:22},
    {id:12,name: 'Khan', city: 'Lahore',username:"Khan123",email:"Khan123@gmail.com",age:23},
    {id:13,name: 'Haseeb', city: 'Lahore',username:"Haseeb123",email:"Haseeb123@gmail.com",age:24},
  ];
  
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'username', headerName: 'Username' },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'age', type: 'number', headerName: 'Age' },
  ];

const RowPinnigComp = () => {
  return (
    <Box sx={{ height: 600, width: '800px', marginLeft:"auto", marginRight:"auto", p:"100px"}}>
       <DataGrid rows={rows} columns={columns} sx={{
        "& .MuiDataGrid-row":{
                        "&:nth-of-type(1)":{
                            position: "sticky",
                            backgroundColor: "rgb(255, 255, 255)",
                            top: "0px",
                            boxShadow: "rgb(0 0 0 / 21%) 0px 3px 4px -2px",
                            zIndex:3,
                        },
                        "&:nth-of-type(2)":{
                            position: "sticky",
                            backgroundColor: "rgb(255, 255, 255)",
                            top: "52px",
                            boxShadow: "rgb(0 0 0 / 21%) 0px 3px 4px -2px",
                            zIndex:3,
                        },
                        "&:nth-of-type(5)":{
                            position: "sticky",
                            backgroundColor: "rgb(255, 255, 255)",
                            top: "104px",
                            boxShadow: "rgb(0 0 0 / 21%) 0px 3px 4px -2px",
                            zIndex:3,
                        },
                        "&:last-child":{
                            position: "sticky",
                            backgroundColor: "rgb(255, 255, 255)",
                            bottom: "0px",
                            zIndex:3,
                            boxShadow: "rgb(0 0 0 / 21%) 0px -3px 4px -2px"
                        },
                    }
       }}/>
    </Box>
  )
}

export default RowPinnigComp