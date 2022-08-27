import React from "react";
import { Grid } from "@mui/material";
import {Card,CardContent,CardActionArea ,CardMedia,Typography} from "@mui/material";
import {useState, useEffect} from "react";
const ImgCard = ({post}) => {
    const [selectedId, setSelectedId] = useState(null);
    return (

        <Grid item >
        <Card sx={{ maxWidth: 442, maxHeight:476 }}>
            <CardActionArea onClick={(e) => {
            console.log(post.id);
            console.log(" selected...");
            setSelectedId(post.id);
            } }>
            <CardMedia
                component="img"
                height="476"
                image={post.photo_url}
                
                alt="loading.."
            />
            
            </CardActionArea>
        </Card>
        </Grid>
    );

}

export default ImgCard;