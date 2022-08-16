import React from "react";
import { Grid,Box } from "@mui/material";
import MyCard from '../../Static/Card';
import {useState, useEffect} from "react";
import ImageCard from '../../Static/ImgCard';
import ImgPost from "../ImageList/ImgPost";
import {ImageList} from "@mui/material";

const Content = (props) => {

   const { postlist } = props;
   console.log("postlist:");
   console.log(postlist);
   const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setposts] = useState([]);
   
   

      
    
   const getSourceData = (source) => {
     
      // const { post_title, post_date, photo_url, avatar_src } = source;
      return(
         <Grid item xs={12} sm={4}>
            <MyCard  {...source}/>
         </Grid>
      );
   };

    return (
       <Grid container spacing={1} style={{maxHeight:2000,overflow:'auto'}}>
         {/* <ImageCard/> */}
            {/* {postlist.map(source => getSourceData(source))} */}
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
             <ImageList variant="masonry" cols={4} gap={10}>
            {postlist.map((post) => (
              <ImgPost {...post}/>
                  
            ))}
          </ImageList>
            </Box>
        
       </Grid>
            
    );
};

export default Content;