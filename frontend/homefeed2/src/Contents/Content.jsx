import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import photoList from "./data";

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