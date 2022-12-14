import * as React from 'react';
import { DataGrid,GridActionsCellItem  } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ColumnPinning from './ColumnPinning';
import { Box } from '@mui/material'
import { useEffect } from 'react';
import { useState } from 'react';


// const rows = [
//   { id: 1, col1: 'Sadam', col2: 'Ali',col3:23,col4:"Engineer",col5:1999},
//   { id: 2, col1: 'Zeeshan', col2: 'Afzal',col3:22,col4:"Engineer",col5:2000},
//   { id: 3, col1: 'Waqas', col2: 'Zaffar',col3:22,col4:"Engineer" ,col5:2000},
//   { id: 4, col1: 'Malik', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998},
//   { id: 5, col1: 'Mohsin', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998},
//   { id: 6, col1: 'Hassan', col2: 'Shahid',col3:24,col4:"Engineer" ,col5:1998},
//   { id: 7, col1: 'Saqib', col2: 'ALi',col3:24,col4:"Engineer" ,col5:1998},
//   { id: 8, col1: 'Shehbaz', col2: 'Ali',col3:24,col4:"Engineer" ,col5:1998},
//   { id: 9, col1: 'Umer', col2: 'Farooq',col3:24,col4:"Engineer" ,col5:1998},
//   { id: 10, col1: 'Usama', col2: 'Khan',col3:24,col4:"Engineer" ,col5:1998},
// ];

// const columns = [
//   { id:1, field: 'col1', headerName: 'First Name', width: 150 },
//   { id:2,field: 'col2', headerName: 'Last Name', width: 150 },
//   { id:3,field: "col3" ,headerName:"Age",width:150},
//   { id:4,field: "col4" ,headerName:"Profession",width:150},
//   { id:5,field: "col5" ,headerName:"Birth Year",width:150},
//   {
//     field: 'actions',
//     type: 'actions',
//     width: 100,
//     getActions: () => [
//       <GridActionsCellItem icon={<CreateIcon />} label="Edit" />,
//       <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
//     ],
//   },
// ];
// const values = columns.map(object => object.field)
// console.log(values)
// if(values[0] == 'col1'){
//     console.log("it is col 1")
// }else{console.log("there is no col 1 named field here")}

// function columnPin(data){
//     // data = columns.map(object => object.field);
//     let initial = data
//     let[first,sec,third,four,fifth,sis] = data
//     console.log(sec)
//     if(first === "col1"){
//         console.log("Col 1 is Here");
//     }else if (sec === 'col2'){
//         console.log("Col 2 is Here");   
//     }else{console.log("there is no col 1 named field here")}



    // switch(initial){
    //     case 'col1':
    //         console.log("Col 1 is Here");
    //         break;
    //     case "name":
    //         console.log("name is here")
    //         break;
    // }

// }
// columnPin(values)

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

// const columnPinningComp = <ColumnPinning first={values[0]}/>
const DataGridComp = ({rows, columns, pinnedColumns}) => {
    const [styledPinnedColumns, setStyledPinnedColumns] = useState([])
    useEffect(() => {
        let cols = [];
        columns.forEach(()=>{
            const values = columns.map(object => object.field)
            console.log("Value",values)
            console.log("Pinned Columns",pinnedColumns)
            values.map((value)=>{
                pinnedColumns.map((pin)=>{
                    if(value === pin){
                        console.log("value =>", value)
                        console.log("pin =>", pin)
                        values.push(pin)
                    }
                })
            })
                console.log("values = ",values)
        })
        // cols.push()
        console.log("cols = ",cols)

        setStyledPinnedColumns(cols);
    }, [])

    
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
        }
        // ,'& .super-app-theme--header': {
        //     backgroundColor: 'rgba(255, 7, 0, 0.55)',
        //   },'& .super-app-theme--cell': {
        //     backgroundColor: 'rgba(255, 7, 0, 0.55)',
        //   }
          }}/> 
    </div>
  );
}


export default DataGridComp
