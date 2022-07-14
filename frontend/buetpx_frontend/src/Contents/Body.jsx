import React from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import photoList from "./Constants";

const Body = () => {

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
  
  export default Body;