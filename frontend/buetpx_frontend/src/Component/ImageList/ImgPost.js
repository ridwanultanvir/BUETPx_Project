import React from 'react';
import {Avatar, Grid} from "@mui/material";
import Header from '../../Static/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'


import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import InfoIcon from '@mui/icons-material/Info';

import { styled } from '@mui/material/styles';

import {useState, useEffect} from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import Time from 'react-time-format'
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: 500,
  alignContent:'left'
});

// import Moment from 'react-moment';s

const uid = 2002;


const  ImgPost=(props)=>{
    // const {post}=prop;
    console.log("props",props);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [post, setpost] = useState([]);  
    const [checklike, setchecklike] = useState([]); 
    // const[checklikebool, setchecklikebool] = useState(false);
    const [comments, setcomments] = useState([]);
    const [commentTxt, setcommentTxt] = useState("");
    const [post_owner, setowner] = useState([]);

    // ===   NOTUN ADD KORSI =====================
    const [countUp, setCountUp] = useState(0); 

    const[isLike, setIsLike] = useState(false);

    const[check1, setcheck1] = useState(false);

    const colorStyle = {color:"blue"}; 

    const handleCheckIfLiked = () => {
      if (checklike.num_likes_this_user === 0) {
        // console.log("not liked------------------------------");
        return 0; 
        
      } else {
        // console.log("liked==============================");
        return 1; 
      }

    }



    const [numLike, setnumLike] = useState([]);  

    // const checkLikeFunc = () => {
    //   fetch("http://localhost:8000/api/check_likes/"+id+"/"+uid)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setchecklike(result);
            
          
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   )

    //   console.log("---checklike",checklike);   
    //   console.log("ami checkLikeFunc er sheshe"); 
    //   setcheck1(true);    
    //   console.log("check1",check1);
    //   if(checklike.num_likes_this_user === 0){
    //     setIsLike(false); 
    //   }else{
    //     setIsLike(true); 
    //   }
      
      
      
      
      
    
    // }

    // const insertLikeFunc = () => {
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       "like_date": new Date(),
    //       "user": uid,
    //       "post": id
    //     })
    //   };
    //   fetch("http://localhost:8000/api/insert_like", requestOptions)
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data);
            
    //       }
    //       )
    //       .catch(error => console.log('error', error));
    // }

    // const deleteLikeFunc = () => {
    //   fetch("http://localhost:8000/api/delete_like/"+id+"/"+uid, { method: 'DELETE' })
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
              
    //           console.log("delete_result",result);

              
    //         },

    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
      
      
    //   }
    //   const getLikeCount = () => {
    //     fetch("http://localhost:8000/api/likes/"+id)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setIsLoaded(true);
    //         setnumLike(result);
    //       },
  
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    //   }

    // const handleLikeClick = () => {

    //   console.log("Like Clicked ");
    //   checkLikeFunc();
    //   /*
    //   while(check1 === false){
    //     console.log("ami check1 e");
    //   }
    //   */
    //  while(check1 === false){
    //   console.log("ami check1 false e");
    //   setTimeout(() => {console.log("The meaning of life")
        
    //   }, 1000);
    //   break; 
    //  }
    
      
      

    //   console.log("ami check1 true e");
    //   if(isLike){
    //     console.log("delete like");
    //     deleteLikeFunc();
    //     setIsLike(false);
    //     // setCountUp(countUp - 1);
    //   }else{
    //     console.log("insert like");
    //     insertLikeFunc();
    //     setIsLike(true);
    //     // setCountUp(countUp + 1);
    //   }
      
      

      
    // }

    // const handleDislikeClick = () => {

    //   console.log("DisLike Clicked ");
      
      

      
    // }

 
        

    
    // const { id } = useParams();

    // useEffect(() => {
    //   fetch("http://localhost:8000/api/check_likes/"+id+"/"+uid)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setIsLoaded(true);
    //         setchecklike(result);
            
            
    //       },
        
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    // }, []);

    // useEffect(() => {
    //   fetch("http://localhost:8000/api/posts_with_uid/"+id)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setIsLoaded(true);
    //         setpost(result);
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    // }, [checklike]);


    

    // useEffect(() => {
    //     fetch("http://localhost:8000/api/likes/"+id)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setnumLike(result);
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //   }, [post]);
      
    //   const {post_title,post_date,photo_url,owner,category,place,tags}=post;
    //   // console.log(post_title);
    //   useEffect(() => {
    //     if(owner)
    //     {
    //       fetch("http://localhost:8000/api/user/"+owner)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setowner(result);
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //     }
    //       // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [numLike]);

    

     

    // console.log("post",post);


    return (
        
        <ImageListItem key={props.photo_url}>

                <img
                  src={`${props.photo_url}?w=248&fit=crop&auto=format`}
                  srcSet={`${props.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={props.post_title}
                  loading="lazy"
                />
              

                  <ImageListItemBar
                  title={props.post_title}
                  subtitle={props.owner.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${props.post_title}`}
                    >
                    <ThumbUpIcon ></ThumbUpIcon>
                    <h5> {numLike.num_likes} </h5>
                    </IconButton>
                  }
                  />

        </ImageListItem>
          
    
    );
    }

    export default ImgPost;