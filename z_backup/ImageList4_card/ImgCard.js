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

class ImgCard extends Component{
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        // userId: props.owner,
        userName: "",
      };
      this.props=props;
    }
     

      
      render()
      {
        const {post}=this.props
        let date=post_date
        // const {title}=props
        // eslint-disable-next-line react-hooks/rules-of-hooks

        return (
            
            <ImageListItem key={post.photo_url}>
            <img
              src={`${post.photo_url}?w=248&fit=crop&auto=format`}
              srcSet={`${post.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={post.post_title}
              loading="lazy"
            />
          

              <ImageListItemBar
              title={post.post_title}
              subtitle={post.owner.name}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${post.post_title}`}
                >
                <ThumbUpIcon onClick={handleLikeClick} style={isLike ? colorStyle : null}></ThumbUpIcon>
                <h5> {numLike.num_likes} </h5>
                </IconButton>
              }
              />

    </ImageListItem>
        );
      }


}
// export default withStyles(useStyles)(ImgCard);
export default ImgCard;
