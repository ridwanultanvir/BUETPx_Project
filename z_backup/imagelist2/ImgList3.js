import React from 'react';
import { Grid} from "@mui/material";
import Header from '../../Static/Header';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';

import {Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../Static/Card';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'


import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {
  useParams
} from "react-router-dom";


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  height: 500,
  alignContent:'left'
});
// import Time from 'react-time-format'
// import Moment from 'react-moment';


const  MyImageList=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]); 
    const  [tag, setTag] = useState([]); 

    
    const { tagname } = useParams();


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setposts(result);
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);
      
      

      const getPost = post => {
        return (
          <Grid item 
          xs={12} sm={6} md={6} lg={4}
           >
           <Card {...post} />
           </Grid>

    
    
        );
      };



    return (
        // <Grid container direction='column' spacing={2}>
        //     <Grid item>
        //       TagName: {tagname}
        //       {posts.map(post => getPost(post))}
        //     </Grid>
        // </Grid>  

      <Grid container direction='column'>
      <Grid item>
      <Header/>
      </Grid>


      <Grid item container>
        <Grid item xs={0} sm={1}>

        

        </Grid>

        <Grid item xs={12} sm={10} >
                
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <ImageList variant="masonry" cols={3} gap={20}>
            {posts.map((post) => (
              <ImageListItem key={post.photo_url}>
                <img
                  src={`${post.photo_url}?w=248&fit=crop&auto=format`}
                  srcSet={`${post.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={post.post_title}
                  loading="lazy"
                />
              

                  <ImageListItemBar
                  title={"abul"}
                  subtitle={"cholo"}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${"jai"}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                  />

        </ImageListItem>
            ))}
          </ImageList>
        </Box>
        </Grid>

        <Grid item xs={0} sm={1} >

        </Grid>
      

        </Grid>
      </Grid>
                        
    
    );
    }

    export default MyImageList;