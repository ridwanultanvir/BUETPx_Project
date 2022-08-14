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
import ImageListItem from '@mui/material/ImageListItem'


import ImageListItemBar from '@mui/material/ImageListItemBar';


import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
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


const  Img2=()=>{

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
    const [numLike, setnumLike] = useState([]);  
    
      
    return (
        <ImageListItem key={post.photo_url}>
                <img
                  src={`${post.photo_url}?w=248&fit=crop&auto=format`}
                  srcSet={`${post.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={post.post_title}
                  loading="lazy"
                />
              

                  <ImageListItemBar
                  title={post.post_title}
                  subtitle={post.owner.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${post.post_title}`}
                    >
                    <ThumbUpIcon ></ThumbUpIcon>
                    <h5> 10 </h5>
                    </IconButton>
                  }
                  />

        </ImageListItem>
                        
    
    );
    }

    export default Img2;