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
import Img2 from './Img2';
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
const uid = 2002;

const  MyImageList=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]); 
    const  [tag, setTag] = useState([]); 
    const [numLike, setnumLike] = useState([]); 
    const[isLike, setIsLike] = useState(false);
    const [checklike, setchecklike] = useState([]); 

    const[check1, setcheck1] = useState(false);

    const colorStyle = {color:"blue"}; 

    const checkLikeFunc = (post) => {
      fetch("http://localhost:8000/api/check_likes/"+post.id+"/"+uid)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setchecklike(result);
            
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      console.log("---checklike",checklike);   
      console.log("ami checkLikeFunc er sheshe"); 
      setcheck1(true);    
      console.log("check1",check1);
      if(checklike.num_likes_this_user === 0){
        setIsLike(false); 
      }else{
        setIsLike(true); 
      }
      
      
      
      
      
    
    }

    const insertLikeFunc = (post) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "like_date": new Date(),
          "user": uid,
          "post": post.id
        })
      };
      fetch("http://localhost:8000/api/insert_like", requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            
          }
          )
          .catch(error => console.log('error', error));
    }

    const deleteLikeFunc = (post) => {
      fetch("http://localhost:8000/api/delete_like/"+post.id+"/"+uid, { method: 'DELETE' })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              
              console.log("delete_result",result);

              
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      
      
      }
      const getLikeCount = (post) => {
        console.log("getLikeCount: post",post);
        fetch("http://localhost:8000/api/likes/"+post.id)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setnumLike(result);
            post.num_likes = result; 
          },
  
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
      }

    const handleLikeClick = (post) => {

      console.log("Like Clicked ");
      checkLikeFunc(post);
      /*
      while(check1 === false){
        console.log("ami check1 e");
      }
      */
     while(check1 === false){
      console.log("ami check1 false e");
      setTimeout(() => {console.log("The meaning of life")
        
      }, 1000);
      break; 
     }
    
      
      

      console.log("ami check1 true e");
      if(isLike){
        console.log("delete like");
        deleteLikeFunc(post);
        setIsLike(false);
        // setCountUp(countUp - 1);
      }else{
        console.log("insert like");
        insertLikeFunc(post);
        setIsLike(true);
        // setCountUp(countUp + 1);
      }
      
      

      
    }
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
              <Img2 {...post}> </Img2>
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

