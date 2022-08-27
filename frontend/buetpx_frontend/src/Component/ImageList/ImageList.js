import React from 'react';
import { Grid} from "@mui/material";
import Header from '../../Static/Header';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImgPost from './ImgPost'; 

const  MyImageList=()=>{
  useEffect(() => {
    if(!localStorage.getItem('token')){
      window.location.href = '/login';
    }
  }, []);
  
    console.log("imagelist")

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]); 


    


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/get_posts_all_data",
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
      }, []);
      
      // const [likepostid, setlikepostid] = useState("");
      // const handleLikeClick2 = (id) => {

      //   console.log("like clicked"); 
      //   console.log("id",id);
      //   // post.num_likes = post.num_likes + 1; 
      // }
      
      // const handleLikeClick = (e) => {
      //   e.preventDefault();
      //   console.log("button clicked! ");
        
        
      // }

    return (

      <Grid container direction='column'>
      <Grid item>
      <Header/>
      </Grid>


      <Grid item container>
        <Grid item xs={0} sm={.5}>

        

        </Grid>

        <Grid item xs={12} sm={11} >
                
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <ImageList variant="masonry" cols={4} gap={10}>
            {posts.map((post) => (
              <ImgPost {...post}/>
                  
            ))}
          </ImageList>
        </Box>
        </Grid>

        <Grid item xs={0} sm={.5} >

        </Grid>
      

        </Grid>
      </Grid>
                        
    
    );
    }

    export default MyImageList;