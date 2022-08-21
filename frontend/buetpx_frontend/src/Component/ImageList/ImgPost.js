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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'


import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import InfoIcon from '@mui/icons-material/Info';

import { styled } from '@mui/material/styles';

import {useState, useEffect} from "react";
import { CardActionArea } from '@material-ui/core';

import {
  useParams,
  useNavigate
} from "react-router-dom";



// import Moment from 'react-moment';s

const uid = 2002;


const  ImgPost=(props)=>{
    // const {post}=prop;
    console.log("props",props);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setpost] = useState([]);  
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

    const imageClick = () => {
        
        console.log('imageClick korso ');
        navigateToSpecificPost(); 
    }

    const navigate = useNavigate();
    const navigateToSpecificPost = () => {
    // 👇️ navigate to /contacts
    navigate('/posts/' + props.id);
    };


    useEffect(() => {
        fetch("http://localhost:8000/api/likes/"+props.id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setnumLike(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [post]);
      
     console.log("num_like",numLike);



    return (
        
      <CardActionArea>
        <ImageListItem key={props.photo_url}>

                <img
                  src={`${props.photo_url}?w=248&fit=crop&auto=format`}
                  srcSet={`${props.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={props.post_title}
                  loading="lazy"
                  onClick={() => imageClick()}
                />
              

                  {/* <ImageListItemBar
                  title={props.post_title}
                  subtitle={props.owner.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${props.post_title}`}
                    >
                    <FavoriteBorderIcon ></FavoriteBorderIcon>
                    <Typography variant="caption" color="textSecondary">{numLike.num_likes} </Typography>
                    </IconButton>
                    
                  }
                  /> */}

        </ImageListItem>
        </CardActionArea>
          
    
    );
    }

    export default ImgPost;