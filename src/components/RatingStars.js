import React, { useState } from 'react'
import { Typography, Rating } from '@mui/material'

const RatingStars = () => {
    const [value, setValue] = useState(null);
    
  return (
    <div>
        <Typography variant="h2" color="primary.superDark">Rating Star Component</Typography>
        <Typography>Controlled</Typography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event,newValue) => {
                setValue(newValue);
            }}
        />
        <Typography>Read Only</Typography>
        <Rating name="read-only" value={value} readOnly/>
        <Typography>Disabled</Typography>
        <Rating name="disabled" value={value} disabled/>
        <Typography>No Rating Given</Typography>
        <Rating name="no-value" value={null}/>
    {/* Rating precision */}
        <Typography>Rating precision</Typography>
        <Rating name="half-rating" defaultValue={1.5} precision={0.5}/>

        <Typography>(Custom icon and color) and Radio group check from radio component inside MATERIAL UI Official website</Typography>

    </div>
  )
}

export default RatingStars;