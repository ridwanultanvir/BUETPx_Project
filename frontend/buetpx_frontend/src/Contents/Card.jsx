import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Grid from '@mui/material/Grid';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton,CardMedia,Avatar} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    Card: {
        width: 250,
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
    // const {title}=props
    const classes = useStyles();
    return (
        
      <Card className={classes.Card}>
        <CardHeader
        avatar={<Avatar/>}
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title={post_title}
        // title="Title"

      />

        
      <CardMedia
        component="img"
        image={photo_url}
        height='200'
        
        width='100%'
        objectFit='cover'
        alt={photo_url}
        className={classes.Media}
      />
        {/* <CardContent height="50">
          <Grid container direction='column' xs={12}>
            
            <Typography>
                {description}
            </Typography>

          </Grid>
        </CardContent> */}

        <CardActions>
            <Grid container>
                <Grid item xs={4}><Button size="small"><ThumbUpIcon/></Button></Grid>
                <Grid item xs={4} />
                <Grid item xs={4}><Button size="small"><CommentIcon/></Button></Grid>
            </Grid>
          
        </CardActions>
      </Card>
    );
  }

  export default MyCard;