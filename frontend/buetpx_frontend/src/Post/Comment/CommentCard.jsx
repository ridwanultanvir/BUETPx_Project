import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions';
import {IconButton,CardMedia,Avatar,CardActionArea,Typography} from '@mui/material';
import Time from 'react-time-format';


function CommentCard(props) {
  const {id,comment_txt,comment_date,user}=props.comment
  return (
    <Card >
            
        <CardHeader
        avatar={<IconButton href="\"><Avatar alt={user.name} src={user.photo_url} /></IconButton>}
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
          fontSize:16,
          textDecoration: 'none',
        }}
      >
        {user}
      </Typography>}
        subheader={
          // date
        <Time value={comment_date} format="YYYY-MM-DD HH:mm"/>
      }

      />

      <p>
        {comment_txt}
      </p>
      </Card>
      
  )
}

export default CommentCard
