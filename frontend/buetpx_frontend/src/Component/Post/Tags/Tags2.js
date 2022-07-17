import React from 'react';
import {Avatar, Grid} from "@mui/material";
import Header from '../../../Static/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
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
import { styled } from '@mui/material/styles';

import {useState, useEffect} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useNavigate
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


const  Tags=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setpost] = useState([]);  
    const [comments, setcomments] = useState([]);
    const [post_owner, setowner] = useState([]);
    
    const { id } = useParams();
    const navigate = useNavigate();
    const navigateToSpecificTag = () => {
      // 👇️ navigate to /contacts
      navigate('/Discover');
    };

    useEffect(() => {
        fetch("http://localhost:8000/api/posts_with_uid/"+id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setpost(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);
      
      const {post_title,post_date,photo_url,owner,category,place,tags}=post;
      // console.log(post_title);
      useEffect(() => {
        fetch("http://localhost:8000/api/user/"+owner)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setowner(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [post]);

      useEffect(() => {
        fetch("http://localhost:8000/api/posts/"+id+"/comments")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setcomments(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [post_owner]);

    const getTag = tag => {

        return (
        
            <Button variant="outlined" color="primary" sx={{
              marginRight:2
            }} onClick={() => {navigateToSpecificTag(); console.log(tag); }}>   
            {tag} 
            
            </Button>
        );
    };



    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
              Hello
            </Grid>
        </Grid>  
                        
    
    );
    }

    export default Tags;