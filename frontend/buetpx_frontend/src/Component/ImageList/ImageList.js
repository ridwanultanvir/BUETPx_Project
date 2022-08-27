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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImgPost from './ImgPost'; 

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
const uid = 2002;

const  MyImageList=()=>{
    console.log("imagelist")

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]); 
    const  [tag, setTag] = useState([]); 
    const [numLike, setnumLike] = useState([]); 
    const[isLike, setIsLike] = useState(false);
    const [checklike, setchecklike] = useState([]); 

    const[check1, setcheck1] = useState(false);

    const colorStyle = {color:"blue"}; 

    


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts",
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
      
      const [likepostid, setlikepostid] = useState("");
      const handleLikeClick2 = (id) => {

        console.log("like clicked"); 
        console.log("id",id);
        // post.num_likes = post.num_likes + 1; 
      }
      
      const handleLikeClick = (e) => {
        e.preventDefault();
        console.log("button clicked! ");
        
        
      }

    return (

      <Grid container direction='column'>
      <Grid item>
      <Header/>
      </Grid>


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
      </Grid>
                        
    
    );
    }

    export default MyImageList;