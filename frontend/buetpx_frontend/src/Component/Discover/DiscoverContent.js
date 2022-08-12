import React from "react";
import { Grid } from "@mui/material";
import MyCard from '../../Static/Card';
import {useState, useEffect} from "react";

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
            {postlist.map(source => getSourceData(source))}
        
       </Grid>
            
    );
};

export default Content;