import * as React from 'react';
import { DataGrid  } from '@mui/x-data-grid';
import { Box } from '@mui/material'


const rows = [
    {id:1,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:2,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:3,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:4,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:5,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:6,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:7,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:8,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:9,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:10,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:11,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:12,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
    {id:13,name: 'Sadam', city: 'Lahore',username:"sadam123",email:"sadam123@gmail.com",age:25},
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
                        "&:last-child":{
                            position: "sticky",
                            backgroundColor: "rgb(255, 255, 255)",
                            bottom: "0px",
                            boxShadow: "rgb(0 0 0 / 21%) 0px 3px 4px -2px",
                            zIndex:3,
                            boxShadow: "rgb(0 0 0 / 21%) 0px -3px 4px -2px"
                        },
                    }
       }}/>
    </Box>
  )
}

export default RowPinnigComp