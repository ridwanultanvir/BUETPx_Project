import './App.css';
import React from 'react';
import {Grid} from "@mui/material";
import Header from './Contents/Header';

function Post(props) {
  return (
   
      <Grid container direction='column'>
        <Grid item>
        <Header/>
        </Grid>
        <Grid item>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        <Grid item container>
          <Grid item xs={0} sm={1}>

          </Grid>

          <Grid item xs={12} sm={10} >
          <h1>A single post shown</h1>
          </Grid>

          <Grid item xs={0} sm={1} >

          </Grid>
         

        </Grid>
      </Grid>
  
  );
}

export default Post;