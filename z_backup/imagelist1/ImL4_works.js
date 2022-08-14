import React from 'react';
import { Grid} from "@mui/material";
import Header from '../../Static/Header';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';

import {Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../Static/Card';
import {useState, useEffect} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'
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
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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
                
        <ImageList
            // sx={{ width: 500, height: 450 }}
            sx={{ width: '100%', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {posts.map((post) => (


              <ImageListItem key={post.img} cols={post.cols || 1} rows={post.rows || 1}>
                <img
                  {...srcset(post.photo_url, 121, post.rows, post.cols)}
                  alt={post.post_title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        <Grid item xs={0} sm={1} >

        </Grid>
      

        </Grid>
      </Grid>
                        
    
    );
    }

    export default MyImageList;