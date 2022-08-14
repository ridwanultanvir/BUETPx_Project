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


const  ImgPost= props => {
    
    const {post} = props;   
    console.log("post",post);

    

    
    return (
        // <div> <h1> {post.post_title} </h1> </div>
        <h1>  {post.post_title} </h1>
        
          
    
    );
    }

    export default ImgPost;