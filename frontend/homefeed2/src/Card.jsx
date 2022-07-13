import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Grid from '@material-ui/core/Grid';
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
    const {title,avatarUrl,imageUrl}=props
    const classes = useStyles();
    return (
        
      <Card className={classes.Card}>
        <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title={title}

      />
        {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
       
        subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        image={imageUrl}
        height='200'
        width='100%'
        objectFit='cover'
        // image="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/330px-IMG_Academy_Logo.svg.png"
        alt="Paella dish"
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