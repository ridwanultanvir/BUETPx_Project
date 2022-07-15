import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Grid from '@mui/material/Grid';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton,CardMedia,Avatar,CardActionArea,Typography} from '@mui/material';
import { makeStyles } from "@mui/styles";
// import {Moment} from 'react-moment';
import Time from 'react-time-format';

const useStyles = makeStyles(() => ({
    Card: {
        width: 300,
        margin: 'auto'
   
      },
      Media: {
        height: 300,
        width: '100%',
        objectFit: 'cover'
      }
  }));


   const MyCard = (props)=> {
    const {id,post_title,post_date,photo_url,owner,category,place,tags}=props
    let date=post_date
    // const {title}=props
    const classes = useStyles();
    return (
        
      <Card className={classes.Card}>
        
        <CardHeader
        avatar={<IconButton href="\"><Avatar /></IconButton>}
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
        {owner}
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
        height='200'
        
        width='100%'
        objectFit='cover'
        alt={photo_url}
        className={classes.Media}
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

  export default MyCard;