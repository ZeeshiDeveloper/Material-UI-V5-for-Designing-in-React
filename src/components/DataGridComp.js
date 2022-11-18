import * as React from 'react';
import { DataGrid,GridActionsCellItem  } from '@mui/x-data-grid';
import { Box } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';


const rows = [
  { id: 1, col1: 'Sadam', col2: 'Ali',col3:23,col4:"Engineer",col5:1999},
  { id: 2, col1: 'Zeeshan', col2: 'Afzal',col3:22,col4:"Engineer",col5:2000},
  { id: 3, col1: 'Waqas', col2: 'Zaffar',col3:22,col4:"Engineer" ,col5:2000},
  { id: 4, col1: 'Malik', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998},
  { id: 5, col1: 'Mohsin', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998},
  { id: 6, col1: 'Hassan', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998},
  { id: 7, col1: 'Saqib', col2: 'ALi',col3:24,col4:"Engineer" ,col5:1998},
  { id: 8, col1: 'Shehbaz', col2: 'Ali',col3:24,col4:"Engineer" ,col5:1998},
  { id: 9, col1: 'Umer', col2: 'Farooq',col3:24,col4:"Engineer" ,col5:1998},
  { id: 10, col1: 'Usama', col2: 'Khan',col3:24,col4:"Engineer" ,col5:1998},
];

const columns = [
  { id:1, field: 'col1', headerName: 'First Name', width: 150 },
  { id:2,field: 'col2', headerName: 'Last Name', width: 150 },
  { id:3,field: "col3" ,headerName:"Age",width:150},
  { id:4,field: "col4" ,headerName:"Profession",width:150},
  { id:5,field: "col5" ,headerName:"Birth Year",width:150},
  {
    field: 'actions',
    type: 'actions',
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<CreateIcon />} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];

// Styling 
const firstBox = {
    display: "flex",
    justifyContent: "space-between"
}
const firstNameBox = {
    width:150,borderTopLeftRadius:"5px",overflow:"hidden",zIndex:1,bgcolor:"rgb(255, 255, 255)",left:"160px",boxShadow:"rgb(0 0 0 / 21%) 2px 0px 4px -2px",marginLeft:"1px"
}
const firstNameSubBox = {
    minHeight:"56px",borderBottom: "1px solid lightgray",display:"flex",alignItems:"center"
}
const fontStyle = {
    fontSize:"0.875rem",ml:"10px",fontFamily:`"Roboto","Helvetica","Arial","sans-serif"`
}
const emptyBox = {
    width:117,borderTopRightRadius:"5px",marginRight:"1px",zIndex:1,bgcolor:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 21%) -2px 0px 4px -2px"
}
const emptySubBox = {
    minHeight:"56px",borderBottom: "1px solid lightgray"
}

const DataGridComp = () => {
  return (
    <div style={{ height: 300, width: '40%', marginLeft:"auto", marginRight:"auto", p:"100px"}}>

{/* Two Boxes for work as columns pinning */}
        <Box sx={{...firstBox}}>
            <Box sx={{...firstNameBox}}>
                <Box sx={{...firstNameSubBox}}>
                    <Box sx={{...fontStyle}}>First Name</Box>
                </Box>
            </Box>

            <Box sx={{...emptyBox}}>
                <Box sx={{...emptySubBox}}></Box>
            </Box>
        </Box>

{/* Data Grid Table */}
       <DataGrid rows={rows} columns={columns} sx={{top:"-58px",
       "& .MuiDataGrid-cell":{
            "&:first-of-type":{
                position: "sticky",
                backgroundColor: "rgb(255, 255, 255)",
                left: "0px",
                float: "left",
                boxShadow: "rgb(0 0 0 / 21%) 2px 0px 4px -2px"
            },"&:hover":{bgcolor:"rgba(0, 0, 0, 0.04)"},
            "&:last-child":{
                position: "sticky",
                backgroundColor: "rgb(255, 255, 255)",
                right: "0px",
                float: "right",
                boxShadow: "rgb(0 0 0 / 21%) -2px 0px 4px -2px"
            },
        }}}/>
    </div>
  );
}


export default DataGridComp
