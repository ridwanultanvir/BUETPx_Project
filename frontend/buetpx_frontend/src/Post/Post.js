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
import FontPost from "./font"; 
import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

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
// props = 
function Post(props) {
  const {id,post_title,post_date,photo_url,owner,category,place,tags}=props
    const getTag = tag => {
        return (
          <Grid item marginLeft={2} >

            <Button variant="outlined" color="primary" >   {tag} </Button>
         

         </Grid>
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
          
          <Grid item container xs={6} direction="column">
            <Grid item >
            <ButtonBase sx={{ width: 500, height: 300 }}>
              <Img src={photo_url} alt='1.jpg'/>
              </ButtonBase>
              {/* <hr></hr> */}
              </Grid>
            <Grid item container>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}> <IconButton size="small"><ThumbUpIcon/></IconButton> </Grid>    
            </Grid>

            <Grid item container>
              <Grid item xs={2} sx={{fontSize:"12"}}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'revert-layer',
                    fontWeight: 600,
                    // letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Category
                </Typography>

              </Grid>
              <Grid item xs={2}><Button variant="outlined" color="secondary">   {category} </Button> </Grid>

              <Grid item>
              <br></br>
              <br></br>
              <br></br>
              
              </Grid>

              
              <Grid item container rowSpacing={2} columnSpacing={2} >
                <Grid item xs={2} >    
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'revert-layer',
                      fontWeight: 700,
                      // letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    Tags
                  </Typography>

                
                </Grid>
              {/* {post_info[0].tags.map(tag => getTag(tag))} */}
                <Grid item xs={10} direction="row">{post_info[0].tags.map(tag => getTag(tag))}</Grid>

          
              </Grid>
            </Grid>  
          </Grid> 
          
          <Grid item container  direction='column' xs={6} sx={{ display: { xs: 'flex' } }}> 
           
              {/* <Grid item container xs={12}>  */}
                <TextField 
                // sx={{width: 10}}
                id="filled-multiline-static"
                label="Add a Comment"
                multiline
                // rows={4}
                defaultValue=""
                variant="outlined"
                />
              
              {/* </Grid> */}
      
              {/* <Grid item> Hello Abcd</Grid> */}

              
              
          </Grid>
          
    
        </Grid> 
      </Grid> 
          
 
  
  );
}

export default Post;