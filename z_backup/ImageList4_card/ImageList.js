import React from 'react';
import {Grid} from "@mui/material";
// import Header from './Contents/Header';
import Header from '../../Static/Header';
import Body from '../../Static/Body';
import ImgBody from './ImgBody';

function ImageList() {
  return (
   
      <Grid container direction='column'>
        <Grid item>
        <Header/>
        </Grid>
        

        <Grid item container>
          <Grid item xs={0} sm={1}>

          </Grid>

          <Grid item xs={12} sm={10} >
          <ImgBody/>
          </Grid>

          <Grid item xs={0} sm={1} >

          </Grid>
         

        </Grid>
      </Grid>
  
  );
}

export default ImageList;