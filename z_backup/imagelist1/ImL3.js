import React from 'react';
import { Grid} from "@mui/material";
import Header from '../../Static/Header';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';

import {Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../Static/Card';
import {useState, useEffect} from "react";

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


const  MyImageList=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]); 
    const  [tag, setTag] = useState([]); 

    
    const { tagname } = useParams();


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts")
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
      }, []);
      
      

      const getPost = post => {
        return (
          <Grid item 
          xs={12} sm={6} md={6} lg={4}
           >
           <Card {...post} />
           </Grid>

    
    
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
                
                <Grid container spacing={2}>
            
                         {posts.map(post => getPost(post))}    
                </Grid>
        </Grid>

        <Grid item xs={0} sm={1} >

        </Grid>
      

        </Grid>
      </Grid>
                        
    
    );
    }

    export default MyImageList;