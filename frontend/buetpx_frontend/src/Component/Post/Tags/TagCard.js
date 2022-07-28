import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Grid from '@mui/material/Grid';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton,CardMedia,Avatar,CardActionArea,Typography} from '@mui/material';
// import { withStyles } from "@mui/styles";
// import {Moment} from 'react-moment';
import Time from 'react-time-format';


// convert it to a class format and then add the api fetch

// const useStyles = withStyles(() => ({
//   Card: {
//       width: 300,
//       margin: 'auto'
 
//     },
//     Media: {
//       height: 300,
//       width: '100%',
//       objectFit: 'cover'
//     }
// }));

const TagCard  = props => {
  
    const {id,post_title,post_date,photo_url} = props;
    const date = new Date(post_date);

    const day = date.getDate();
    const year = date.getFullYear();




    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     A
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={post_title}
            // subheader={dateString}
          />
          <CardMedia
            component="img"
            height="194"
            image={photo_url}
            alt="Image"
          >
            
            </CardMedia>
          {/* <CardContent>
            <Typography variant="body2" color="text.secondary">
              Natural Baeuty
            </Typography>
          </CardContent> */}
           <CardActions>
                <Grid container>
                    <Grid item xs={.5} />
                    <Grid item xs={8} >{post_title}</Grid>
                    
                    <Grid item xs={2}><IconButton size="small"><ThumbUpIcon/></IconButton></Grid>
                    
                    <Grid item xs={1}><IconButton size="small"><CommentIcon/></IconButton></Grid>
                </Grid>
              
            </CardActions>
          {/* <CardActions disableSpacing> */}
            
            {/* share icon */}
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
           
          {/* </CardActions> */}
         
        </Card>
      );
}



// export default withStyles(useStyles)(TagCard);
export default TagCard;

