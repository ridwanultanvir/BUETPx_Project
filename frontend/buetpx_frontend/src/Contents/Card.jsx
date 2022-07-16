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

class MyCard extends Component{
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
        const {id,post_title,post_date,photo_url,owner,category,place,tags}=this.props
        let date=post_date
        // const {title}=props
        // eslint-disable-next-line react-hooks/rules-of-hooks

        return (
            
          // <Card className={classes.Card}>
            <Card >
            
            <CardHeader
            avatar={<IconButton href="\"><Avatar alt={owner.name} src={owner.photo_url} /></IconButton>}
            // action={
            //   <IconButton aria-label="settings">
             
            //   </IconButton>
            // }
            title={<Typography
            // variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'revert-layer',
              fontWeight: 500,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {owner.name}
          </Typography>}
            subheader={
              // date
            <Time value={date} format="YYYY-MM-DD HH:mm"/>
          }
    
          />
    
        <CardActionArea href="post">
          <CardMedia
            component="img"
            image={photo_url}
            height='300'
            
            width='100%'
            objectFit='cover'
            alt={photo_url}
            // className={classes.Media}
          />
           </CardActionArea>
    
            <CardActions>
                <Grid container>
                    <Grid item xs={.5} />
                    <Grid item xs={8} >{post_title}</Grid>
                    
                    <Grid item xs={2}><IconButton size="small"><ThumbUpIcon/></IconButton></Grid>
                    
                    <Grid item xs={1}><IconButton size="small"><CommentIcon/></IconButton></Grid>
                </Grid>
              
            </CardActions>
          </Card>
        );
      }


}
// export default withStyles(useStyles)(MyCard);
export default MyCard;

  //  const MyCard = (props)=> {
    
  // }

  // export default MyCard;