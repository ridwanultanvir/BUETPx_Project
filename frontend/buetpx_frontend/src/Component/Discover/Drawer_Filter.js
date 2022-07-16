import React from "react";
import {useState, useEffect} from "react";

import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import RadioButton from "./RadioButton";
import RadioButton2 from "./RadioButtonGroup";
import RadioButtons from "./RadioButtons";
import Typography from "@mui/material";
import CheckboxesGroup from "./CheckBoxes";
const Content = () => {

    


    

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
                    <RadioButton />
                    {/* <RadioButton label="Likes" /> */}

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
            <CheckboxesGroup/>

                {/* <RadioButtons /> */}
            </Grid>
        <Grid item sm={2}/>
    </Grid>
        
     </Grid>
            
    );
};

export default Content;