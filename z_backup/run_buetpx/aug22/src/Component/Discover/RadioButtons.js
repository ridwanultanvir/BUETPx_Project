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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setcategories] = useState([]);
    

// Note: the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()
useEffect(() => {
  fetch("http://localhost:8000/api/categories")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setcategories(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

    const getRadioButton = (source) => {
     
        const { id, name, posts } = source;
        return(
            
           <Grid item  sm={8}>
             <FormControlLabel value={id} control={<Radio />} label={name} />
           </Grid>
        );
     };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1"
        name="radio-buttons-group"
      > 
      {categories.map(source => getRadioButton(source))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons
