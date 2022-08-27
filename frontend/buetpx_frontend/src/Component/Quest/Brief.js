import React from 'react';
import { Grid,Box, Paper, Typography } from '@mui/material';

import {useState, useEffect} from "react";

import CategoryIcon from '@mui/icons-material/Category';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
const formatDate = (date) => {
    // format to i.e 6 jan, saturday at 3:00pm
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";

    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = n  + ", "+mon +" " + day + ", " + year + " at " + h + ":" + m;
    return date;
  }
const Brief = ({quest}) => {

    

    return(
        <div>
        <Grid item>
        <Paper sx={{backgroundColor:'#f5f5f5', minHeight:'760px', paddingTop:'20px'}}>

                    
                    
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px', fontSize:'h5.fontSize' ,fontWeight:'bold'}}> <DescriptionOutlinedIcon sx={{paddingRight:'4px'}} />Description </Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}>{quest.description}</Typography>
                    
                   
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px', fontSize:'h5.fontSize',fontWeight:'bold'}}> <CategoryIcon sx={{paddingRight:'4px'}}/>Theme</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}>{quest.theme}</Typography>
                    
                    
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px', fontSize:'h5.fontSize',fontWeight:'bold'}}><TimelapseOutlinedIcon sx={{paddingRight:'4px'}}/>Timing</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}> Starts: {formatDate(quest.startDate)}</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}> Ends: {formatDate(quest.endDate)}</Typography>


            
        </Paper>
    </Grid>
    </div>

    );
}
export default Brief;