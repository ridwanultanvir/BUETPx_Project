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
import TagCard  from './TagCard';
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
    const [posts, setposts] = useState([]); 
    const  [tag, setTag] = useState([]); 

    
    const { tagname } = useParams();


    useEffect(() => {
        fetch("http://localhost:8000/api/posts_by_tagname/"+tagname)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setposts(result);
            },
            // setTag(tagname), 
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [tagname]);
      
      

      const getPost1 = post => {
        return (
          <Grid item 
          xs={12} sm={6} md={6} lg={4}
           >
           <TagCard {...post} />
           </Grid>

    
    
        );
      };

      const getPost = post => {
        return (
            <h1> {post.post_title}</h1>

    
    
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
                <Grid item> 
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                          <StyleOutlinedIcon sx={{marginRight:2}}/>
                        Tag : {tagname}
                        </Typography>
                
                </Grid>
                <Grid container spacing={2}>
            
                         {posts.map(post => getPost1(post))}    
                </Grid>
        </Grid>

        <Grid item xs={0} sm={1} >

        </Grid>
      

        </Grid>
      </Grid>
                        
    
    );
    }

    export default Tags;