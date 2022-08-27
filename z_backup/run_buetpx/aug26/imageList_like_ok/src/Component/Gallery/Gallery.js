import React from 'react';
import {Grid} from "@mui/material";
// import Header from './Contents/Header';
import Header from '../../Static/Header';
import GalleryBody from './GalleryBody';


const Gallery = () =>{

  return (
   
      <Grid container direction='column'>
        <Grid item>
        <Header/>
        </Grid>
        

        <Grid item container>
          <Grid item xs={0} sm={1}>

          </Grid>

          <Grid item xs={12} sm={10} >
          <GalleryBody/>
          </Grid>

          <Grid item xs={0} sm={1} >

          </Grid>
         

        </Grid>
      </Grid>
  
  );
}

export default Gallery;