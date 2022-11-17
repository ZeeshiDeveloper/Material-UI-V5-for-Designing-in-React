import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box,Button,IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';


const rows = [
  { id: 1, col1: '', col2: 'Ali',col3:23,col4:"Engineer",col5:1999,col6:""},
  { id: 2, col1: '', col2: 'Afzal',col3:22,col4:"Engineer",col5:2000,col6:""},
  { id: 3, col1: '', col2: 'Zaffar',col3:22,col4:"Engineer" ,col5:2000,col6:""},
  { id: 4, col1: '', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998,col6:""},
  { id: 5, col1: '', col2: 'Saqib',col3:24,col4:"Engineer" ,col5:1998,col6:""},
  { id: 6, col1: '', col2: 'Saqib',col3:24,col4:"Engineer" ,col5:1998,col6:""},
  { id: 7, col1: '', col2: 'Saqib',col3:24,col4:"Engineer" ,col5:1998,col6:""},
];

const columns = [
  { field: 'col1', headerName: 'First Name', width: 150 },
  { field: 'col2', headerName: 'Last Name', width: 150 },
  {field: "col3" ,headerName:"Age",width:150},
  {field: "col4" ,headerName:"Profession",width:150},
  {field: "col5" ,headerName:"Birth Year",width:150},
  {field: "col6" ,headerName:"",width:100},
];

// For Map Functions
const firstNameItemList = [
    {name:"Sadam"},
    {name:"Zeeshan"},
    {name:"Waqas"},
    {name:"Malik"},
    {name:"Mohsin"},
    {name:"Hassan"},
    {name:"Saqib"},
]
const buttonGroupList = [
    {editIcon:CreateIcon,delIcon:DeleteIcon},
    {editIcon:CreateIcon,delIcon:DeleteIcon},
    {editIcon:CreateIcon,delIcon:DeleteIcon},
    {editIcon:CreateIcon,delIcon:DeleteIcon},
    {editIcon:CreateIcon,delIcon:DeleteIcon},
    {editIcon:CreateIcon,delIcon:DeleteIcon},
    {editIcon:CreateIcon,delIcon:DeleteIcon},
]


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
    width:116,borderTopRightRadius:"5px",marginRight:"1px",zIndex:1,bgcolor:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 21%) -2px 0px 4px -2px"
}
const emptySubBox = {
    minHeight:"56px",borderBottom: "1px solid lightgray"
}
const secondBox = {
    height:"171px",overflow:"auto",display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
}
const firstNameList = {
    width:150,overflow:"hidden",zIndex:1,bgcolor:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 21%) 2px 0px 4px -2px",marginLeft:"1px"
}
const firstNameListStyle = {
    minHeight:"50px",minWidth:"160px",display:"flex",alignItems:"center",
    borderBottom: "1px solid lightgray"
}
const firstNameFontStyle = {
    fontSize:"0.875rem",ml:"10px",fontFamily:`"Roboto","Helvetica","Arial","sans-serif"`
}
const buttonGroupBox = {
    width:100,zIndex:1,bgcolor:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 21%) -2px 0px 4px -2px"
}
const buttonGroupSubBox = {
    minHeight:"50px",justifyContent:"center",gap:"10px",display:"flex",alignItems:"center",
    borderBottom: "1px solid lightgray",color:"rgba(0, 0, 0, 0.54)"
}

const DataGridComp = () => {
  return (
    <div style={{ height: 300, width: '40%', marginLeft:"auto", marginRight:"auto" }}>

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
        <Box sx={{...secondBox}}>
            <Box sx={{...firstNameList}}>
                {firstNameItemList.map((item,index)=>{
                    return(
                        <Box sx={{...firstNameListStyle}} key={index}>
                            <Box sx={{...firstNameFontStyle}}>{item.name}</Box>
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{...buttonGroupBox}}>
                {buttonGroupList.map((item,index)=>{
                    return(
                        <Box sx={{...buttonGroupSubBox}} key={index}>
                            <IconButton aria-label="edit">
                                <item.editIcon sx={{fontSize:"1.25rem"}}/>
                            </IconButton>
                            <IconButton aria-label="edit">
                                <item.delIcon sx={{fontSize:"1.25rem"}}/>
                            </IconButton>
                        </Box>
                    )
                })}
            </Box>
        </Box>

{/* Data Grid Table */}
       <DataGrid rows={rows} columns={columns} sx={{top:"-229px"}}/>
    </div>
  );
}


export default DataGridComp
