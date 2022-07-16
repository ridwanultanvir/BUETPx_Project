import React from "react";
import {useState, useEffect} from "react";

import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import RadioButton from "./RadioButton";
import RadioButton2 from "./RadioButtonGroup";
import Typography from "@mui/material";
const Conent = () => {

    
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
     
        // const { post_title, post_date, photo_url, avatar_src } = source;
        return(
            
           <Grid item  sm={8}>
                <RadioButton2 {...source}/>
           </Grid>
        );
     };

    return (
       <Grid container direction = "column">
        <Grid item xs = {0} sm={2}>
        {/* make the text nice */}
        <b>Sort</b>
        </Grid>
         <Grid item container direction="row">
           <Grid item sm={2}>
            
            </Grid>
            <Grid item sm={8}>
                <RadioButton label="Newest" />
                <RadioButton label="Likes" />
                </Grid>
            <Grid item sm={2}/>

        </Grid>
        {/* <Grid item container direction="row">
        <Grid item sm={2}>
            
            </Grid>
            <Grid item sm={8}>
                Option 2
                </Grid>
            <Grid item sm={2}/>
            </Grid> */}
        
        <Divider/>
        <Divider/>
        <Grid item xs = {0} sm={2}>
           <b>Categories</b> 
        </Grid>
        
        <Grid item container direction="row">
           
        <Grid item sm={2}>
            
            </Grid>
            
            <Grid item sm={8}>
            {categories.map(source => getRadioButton(source))}
            </Grid>
        <Grid item sm={2}/>
    </Grid>
        
     </Grid>
            
    );
};

export default Conent;