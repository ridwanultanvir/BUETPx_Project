import React from 'react';
import { Grid } from '@mui/material';
import {FormLabel,FormControl,Select,InputLabel,FormGroup,MenuItem, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Header from '../../Static/Header';
import {Divider, Button} from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import CameraEnhanceTwoToneIcon from '@mui/icons-material/CameraEnhanceTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import TagTwoToneIcon from '@mui/icons-material/TagTwoTone';
import {useState, useEffect} from "react";

import Active from './Active';
import Ended from './Ended';

const Quest = () => {

    const [option, setoption] = useState(1);
    const [component, setcomponent] = useState(<div><Active/></div>);

  const handleChange = (event) => {
    setoption(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    if(option === 1){
        setcomponent(<div><Active/></div>);
    }
    else{
        setcomponent(<div><Ended/></div>);
    }
    } , [option]);

    return(

        <div>
            <Grid container spacing={1} direction='column'>
                <Grid item>
                    <Header/>
                </Grid>

                <Grid item>
                    <Grid container spacing={2} direction='row'>
                        <Grid item sm={4}/>
                        <Grid item>
                            <FormControl variant="outlined" fullWidth sx={{width:'600px' }}>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={option}
                            onChange={handleChange}
                            >
                                
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={2}>Ended</MenuItem>
                            </Select>
                            </FormControl>

                         </Grid>
                         <Grid item sm={4}/>
                    </Grid>
                </Grid>
                <Grid item>
                    {component}
                </Grid>
            </Grid>
        </div>
    );

}

export default Quest;