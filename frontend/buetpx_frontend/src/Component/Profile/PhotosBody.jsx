import React from 'react';
import { Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImgPost from '../ImageList/ImgPost'; 

const PhotosBody=(props)=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]); 
    const {uid}=props;

    console.log("---------------------uid----------------- ",uid);
    


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts_by_uid/"+(uid),
        {
          method:"GET",
          headers:{
              "Content-Type":"application/json",
              "Authorization":'Token '+localStorage.getItem('token')
          }
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              // add isLike field to result 
   
              result.map(post => {
                                      post.isLiked = false;
                                      
                                      post.num_likes = 4; 
                                      return post;
              });
              setposts(result);
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [uid]);
      
      

    return (

   
      


      <Grid item container>
        <Grid item xs={0} sm={1}>

        

        </Grid>

        <Grid item xs={12} sm={10} >
                
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <ImageList variant="masonry" cols={4} gap={10}>
            {posts.map((post) => (
              <ImgPost {...post}/>
                  
            ))}
          </ImageList>
        </Box>
        </Grid>

        <Grid item xs={0} sm={1} >

        </Grid>
      

        </Grid>
                        
    
    );
    }

    export default PhotosBody;