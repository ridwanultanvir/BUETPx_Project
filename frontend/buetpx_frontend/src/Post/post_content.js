import React from "react";

import { Grid } from "@mui/material";
// import photoList from "./Constants";
// import { Grid } from "@mui/material";
import photoList from "./post_info";
// import Card from '@mui/material/Card';
const Content = () => {

    const getPhotoCard = photoObj => {
      return (
        <Grid item xs={12} sm={4}>
          <Card {...photoObj} />
        </Grid>
      );
    };
  
    return (
      <Grid container spacing={2}>

        {photoList.map(photoObj => getPhotoCard(photoObj))}
      </Grid>
    );
  };
  
  export default Content;