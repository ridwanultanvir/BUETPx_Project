import '../App.css';
import React from 'react';
import {Grid} from "@mui/material";
import Header from '../Contents/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';
import { TextField } from '@material-ui/core';
import { Chip } from '@mui/material';
import { Box } from '@mui/material';
import Content from './post_content';
import post_info from "./post_info";
import Button from '@mui/material/Button';
// const sampleJSON = {
//     id: 2005,
//     post_title: "Sunny Day",
//     post_date: "2010-08-02T21:27:44+0000",
//     photo_url: "https://media.gettyimages.com/photos/central-business-district-of-sydney-at-daytime-picture-id973115274?k=20&m=973115274&s=612x612&w=0&h=X1ceWUm3p-TjYpz76w8HGeq9Azqwk6cgwKOLJODjFHQ=",
//     owner: 1004,
//     category: "landscape",
//     place: "Boston, MA",
//     tags: ["sun", "cloud", "sky"]
// };

function Post(props) {
    const getTag = tag => {
        return (
          // <Grid item xs={2}  >
        <Button variant="outlined" color="secondary" >   {tag} </Button>
        //  </Grid>
        );
      };
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
              <img src="https://photos.nomadicnotes.com/img/s/v-3/p2759081374-4.jpg" alt='1.jpg'width="600" height="500"></img>
              <hr></hr>
              </Grid>
            <Grid item container>
            
                <Grid item xs={2}> <IconButton size="small"><ThumbUpIcon/></IconButton> </Grid>
                <Grid item xs={6} />
                <Grid item xs={2} ><IconButton size="small"><CommentIcon/></IconButton></Grid>
            </Grid>
          </Grid>

          <Grid item container xs={6} direction='column' >
          <Grid item container spacing={10}>
          <Grid item xs={2} > <Button variant="outlined" color="primary">   Category </Button> </Grid>
          <Grid item xs={2}><Button variant="outlined" color="secondary">   {post_info[0].category} </Button> </Grid>

          </Grid>
       

            

            <Grid item>
            <br></br>
            <br></br>
            </Grid>

            {/* <Grid item container xs={6} direction='column' > */}
          <Grid item container spacing={10} >
          <Grid item xs={2} > <Button variant="outlined" color="primary">   Keywords </Button> </Grid>
          {/* {post_info[0].tags.map(tag => getTag(tag))} */}
          <Grid item xs={2}>{post_info[0].tags.map(tag => getTag(tag))} </Grid>

            {/* </Grid> */}

            {/* <Grid item>
            <Button variant="outlined" color="primary">   Keywords </Button>
 
            {post_info[0].tags.map(tag => getTag(tag))}
            

            </Grid> */}
            </Grid>
            
            

            
            
            {/* <Grid item xs={2}></Grid>
            <Chip label="Clickable" />
            <Chip label="Clickable" variant="outlined"  /> */}
            
          </Grid>
      
        </Grid>
      </Grid>
         
  
  );
}

export default Post;