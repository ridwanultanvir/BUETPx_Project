import React from "react";
import MyCard from "./Card";
import { Grid } from "@mui/material";
import coffeMakerList from "./Constants";

const Content = () => {
    const getCoffeMakerCard = coffeMakerObj => {
      return (
        <Grid item xs={12} sm={4}>
          <MyCard {...coffeMakerObj} />
        </Grid>
      );
    };
  
    return (
      <Grid container spacing={2}>
        {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
      </Grid>
    );
  };
  
  export default Content;