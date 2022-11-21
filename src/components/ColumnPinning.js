import React from 'react'

const ColumnPinning = (props) => {
    switch(props){
      case 'col1':
        console.log("this is column one from column pinning component");
        break;
    }
  return (
    <div>
      <h1>This is {props.first}</h1>
    </div>
  )
}

export default ColumnPinning
