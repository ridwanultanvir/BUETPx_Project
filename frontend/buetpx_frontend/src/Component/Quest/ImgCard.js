import React from "react";
import { Grid } from "@mui/material";
import {Card,CardContent,CardActionArea ,CardMedia,Typography} from "@mui/material";

const ImgCard = ({post}) => {
    return (

        <Grid item >
        <Card sx={{ width: 342, height:400 }}>
            <CardActionArea onClick={(e) => {
            console.log(post.id);
            console.log(" selected...");
            setSelectedId(post.id);
            } }>
            <CardMedia
                component="img"
                height="400"
                width='342'
                image={post.photo_url}
                
                alt="loading.."
            />
            
            </CardActionArea>

        </Card>
        </Grid>
    );

}

export default ImgCard;