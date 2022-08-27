import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from "@mui/material";
import {useState, useEffect} from "react";
import Checkbox from '@mui/material/Checkbox';



const RadioButtons = () => {
   

    

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1"
        name="radio-buttons-group"
      > 
         <Grid item  sm={8}>
             <FormControlLabel value="newest" control={<Radio />} label="Newest" />
             <FormControlLabel value="likes" control={<Radio />} label="Likes" />
           </Grid>
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons
