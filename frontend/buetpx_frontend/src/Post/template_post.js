import '../App.css';
import React from 'react';
import {Grid} from "@mui/material";
import Header from '../Contents/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';

function Post(props) {
  return (
   
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Header/>
        </Grid>
        <Grid item>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        <Grid item container marginLeft={4}>
          
          <Grid item container xs={6} direction='column'>
            <Grid item >
              <img src="https://media.gettyimages.com/vectors/blue-sky-and-clouds-seamless-vector-background-vector-id1163292935?k=20&m=1163292935&s=612x612&w=0&h=UkJc7uklb677HRh_Mn-5mrFM1cy4u8xJUxiYl4540eQ=" alt='1.jpg'></img>
              <hr></hr>
              </Grid>
            <Grid item container>
            
                <Grid item xs={2}></Grid>
                <Grid item xs={8} />
                <Grid item xs={2} ><IconButton size="small"><ThumbUpIcon/></IconButton><IconButton size="small"><CommentIcon/></IconButton></Grid>
            </Grid>
          </Grid>

          <Grid item container xs={6} direction='column' >
            &nbsp;Comments here
          </Grid>
      
        </Grid>
      </Grid>
         
  
  );
}

export default Post;