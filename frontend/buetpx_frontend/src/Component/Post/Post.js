import React from 'react';
import {Avatar, Grid} from "@mui/material";
import {Paper} from "@mui/material";
import Header from '../../Static/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';
import { TextField } from '@material-ui/core';
import { Chip } from '@mui/material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

import {useState, useEffect} from "react";
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CommentCard from './CommentCard';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  alignContent:'left'
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

const  Post=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setpost] = useState([]);  
    const [comments, setcomments] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/api/posts/"+id)
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
      }, []);

    const getTag = tag => {

        return (
        
            <Button variant="outlined" color="primary" sx={{
              marginRight:2
            }}>   {tag} </Button>
        );
    };

    const getComment = comment => {
        return (
        
          <CommentCard comment={comment}/>
    
        );
    };

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
            <Header/>
            </Grid>
     
            <Grid container spacing={2} marginLeft={4} >

    
                <Grid container item xs={12} >
                <Grid item xs={12}>
                    <ButtonBase sx={{ width: '90%', maxHeight: '100%',maxWidth:'1080px' }}>
                        <Img src={photo_url} alt='1.jpg'/>
                    </ButtonBase>
                    
                </Grid>

                
                <Grid item container>

                        <Grid item xs={12}>
                        <hr></hr>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={2}> 
                        <IconButton size="small"><ThumbUpIcon/></IconButton> 
                        </Grid>    
                        <Grid item xs={2}>
                        <IconButton size="small"><CollectionsOutlinedIcon/></IconButton>
                        <Grid item xs={4}></Grid>
                         </Grid>    
                         <Grid item xs={12}>
                        <hr></hr>
                        </Grid>
                </Grid>

     
                <Grid item container xs={12} wrap="nowrap" spacing={2} >
                      <Grid item sx={{rightMargin:3}}>
                        <Avatar 
                        // alt={owner.name} 
              // ************ problem here ***************************************//
                        sx={{ width: 56, height: 56 }} />
                      </Grid>
                      <Grid  item justifyContent="left" >
                 
                        <h3 style={{ margin: 0, textAlign: "left" }}>{post_title}</h3>
                        
                      
                      </Grid>
                  
                  </Grid>

                </Grid>
                
                <Grid item container sx={{marginTop:2}}>

                  
                <Grid item xs={1.5} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        Category
                        </Typography>

                </Grid>
                <Grid item xs={10.5}><Button variant="outlined" color="secondary">   {category} </Button> </Grid>
                </Grid>

                
                  

                  
               

                {/* 4th row */}
                <Grid item container sx={{marginTop:2}}>
                <Grid item xs={1.5} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        Tags
                        </Typography>

                </Grid>
                <Grid item xs={10.5} >{tags?.map(tag => getTag(tag))}</Grid>
                
                
                </Grid>

               


                {/* 2nd Column */}
                <Grid container item xs={12}   >
              
                <Grid item xs={10} sx={{marginBottom:2}}>
                <TextField 
                       
                        id="filled-multiline-static"
                        label="Add a Comment"
                        multiline
                        fullWidth 
                        size="medium"
                        defaultValue=""
                        variant="outlined"
                        />
                        
                        
                </Grid>
               
                <Grid item xs={12}>
                <Button variant='outlined'>Submit</Button>
                </Grid>
                
                
                {comments.map(comment => getComment(comment))}
         
                
                </Grid>
            </Grid>

        {/* etar baire header contianer */}
        </Grid>  
                        
    
    );
    }

    export default Post;