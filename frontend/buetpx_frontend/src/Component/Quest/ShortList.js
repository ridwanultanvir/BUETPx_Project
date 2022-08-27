import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Typography ,Paper} from '@mui/material';
import ImgCard from './ImgCard';
import {useState, useEffect} from "react";

export default function ShortList({quest}) {

  const [submissions, setSubmissions] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {

    const reqOption={
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      }

    }
    fetch('http://localhost:8000/api/get_shortlisted_photo/'+quest.id,reqOption)
    .then(res=>res.json())
    .then(data=>{

      // extract post and set to postList
      let posts = [];
      data.forEach(sub=>{
        posts.push(sub.post);
      } )
      console.log("posts:", posts);
      setPostList(posts);

      console.log("subs:",data);
    }).catch(err=>console.log(err))


  }, []);
  return (
        <Grid item  >
            
                <Paper sx={{minHeight:'1080px',minWidth:'760px', backgroundColor:'#f5f5f5'}}>
                    <Grid item container>
                    <Grid item sm={2}/>
                    <Grid container spacing={1} sx={{marginLeft:7, marginRight:5}}>
                        
                            {postList.map((item, index) => (
                                <Grid item key={index}>
                                    <ImgCard post={item} />
                                </Grid>
                            ))}
                    </Grid>
                    <Grid item sm={2}/>
                    </Grid>
                </Paper>
                
                
           
        </Grid>
  );
}


const itemData = [
  {
    id:1,
    photo_url: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    id:2,
    photo_url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    id:3,
    photo_url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    id:4,
    photo_url: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    id:5,
    photo_url: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    id:6,
    photo_url: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    id:7,
    photo_url: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    id:8,
    photo_url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    id:9,
    photo_url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    id:10,
    photo_url: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    id:11,
    photo_url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    id:12,
    photo_url: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];
