import React from 'react';
import {Avatar, Grid, Paper} from "@mui/material";
import Header from '../../Static/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {useState, useEffect} from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";
import CommentCard from './CommentCard';
import Time from 'react-time-format'
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: 500,
  alignContent:'left'
});

// style to add background image
const styles = {
  paperContainer: {
      height: 1356,
      width:'100%',
      backgroundImage: `url(${"../../Static/img/blurry-preview.jpg"})`
  }
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// import Moment from 'react-moment';s

const uid = 2000;


const  Post=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setpost] = useState([]);  
    const [checklike, setchecklike] = useState([]); 
    // const[checklikebool, setchecklikebool] = useState(false);
    const [comments, setcomments] = useState([]);
    const [commentTxt, setcommentTxt] = useState("");
    const [post_owner, setowner] = useState([]);
    const [galleries, setGalleries] = useState([]);
  
    
  
    // ===   NOTUN ADD KORSI =====================
    const [countUp, setCountUp] = useState(0); 

    const[isLike, setIsLike] = useState(false);

    const[check1, setcheck1] = useState(false);

    const [addToGalleryOpen, setaddToGalleryOpen] = useState(false);


    const colorStyle = {color:"blue"}; 

    const addToGallery=(galleryId)=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
       },
        body: JSON.stringify({ 
          "id": galleryId,
          "post_id": post.id
          
        })
      };
      fetch("http://localhost:8000/api/add_remove_post_to_gallery", requestOptions)
      .then(()=>{
        // window.location.reload();
        setaddToGalleryOpen(false);
        
      })

      setaddToGalleryOpen(true);
    }

    const getGallery=gallery=>
    { 

      console.log("gallery.post_present",gallery.post_present)
      if (gallery.post_present===true)
      {
        return(
          <Button value={gallery.id} sx={{marginRight:2}} onClick={()=>{
            addToGallery(gallery.id);
          }} variant='contained' >{gallery.title}</Button>
        )
      }

      return(
        <Button value={gallery.id} sx={{marginRight:2}} onClick={()=>{
          addToGallery(gallery.id);
        }} variant='outlined' >{gallery.title}</Button>
      )

        
    }

    const handleAddToGalleryClick = () => {
      fetch("http://localhost:8000/api/galleries/"+uid+"/"+post.id,{ method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  
  })
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setGalleries(result);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
      setaddToGalleryOpen(true);
    }

    const handleAddToGalleryClose = () => {
      setaddToGalleryOpen(false);
    }
    const handleCheckIfLiked = () => {
      if (checklike.num_likes_this_user === 0) {
        // console.log("not liked------------------------------");
        return 0; 
        
      } else {
        // console.log("liked==============================");
        return 1; 
      }

    }



    const [numLike, setnumLike] = useState([]);  

    const checkLikeFunc = () => {
      fetch("http://localhost:8000/api/check_likes/"+id+"/"+uid,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setchecklike(result);
            
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      console.log("---checklike",checklike);   
      console.log("ami checkLikeFunc er sheshe"); 
      setcheck1(true);    
      console.log("check1",check1);
      if(checklike.num_likes_this_user === 0){
        setIsLike(false); 
      }else{
        setIsLike(true); 
      }   
    }

    const insertLikeFunc = () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': 'Token '+localStorage.getItem('token')
       },
        body: JSON.stringify({
          "like_date": new Date(),
          "user": uid,
          "post": id
        })
      };
      fetch("http://localhost:8000/api/insert_like", requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            
          }
          )
          .catch(error => console.log('error', error));
    }

    const deleteLikeFunc = () => {
      fetch("http://localhost:8000/api/delete_like/"+id+"/"+uid, { 
            method: 'DELETE' , 
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Token '+localStorage.getItem('token')
            }
          })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              
              console.log("delete_result",result);

              
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      
      
      }
      const getLikeCount = () => {
        fetch("http://localhost:8000/api/likes/"+id,{ method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      
      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setnumLike(result);
          },
  
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
      }

    const handleLikeClick = () => {

      console.log("Like Clicked ");
      checkLikeFunc();
      /*
      while(check1 === false){
        console.log("ami check1 e");
      }
      */
     while(check1 === false){
      console.log("ami check1 false e");
      setTimeout(() => {console.log("The meaning of life")
        
      }, 1000);
      break; 
     }
    
      
      

      console.log("ami check1 true e");
      if(isLike){
        console.log("delete like");
        deleteLikeFunc();
        setIsLike(false);
        // setCountUp(countUp - 1);
      }else{
        console.log("insert like");
        insertLikeFunc();
        setIsLike(true);
        // setCountUp(countUp + 1);
      }
      
      

      
    }

    const handleDislikeClick = () => {
      console.log("DisLike Clicked ");
    }




 
        

    
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/api/post_like_with_id/"+id,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')}
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setpost(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);
      console.log("post",post);

      useEffect(() => {
        fetch("http://localhost:8000/api/likes/"+id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setnumLike(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [post]);

      
      
      const {post_title,post_date,photo_url,owner,category,place,tags}=post;
      
      // console.log(post_title);
      useEffect(() => {
        if(owner)
        {
          fetch("http://localhost:8000/api/user/"+owner,
          {
            method: "GET", // *Type of request GET, POST, PUT, DELETE
            mode: "cors", // Type of mode of the request
            cache: "no-cache", // options like default, no-cache, reload, force-cache
            credentials: "same-origin", // options like include, *same-origin, omit
            headers: {
              "Content-Type": "application/json" // request content type,
              ,
              "Authorization": 'Token ' + localStorage.getItem('token')
              
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
        }
          )
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setowner(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [numLike]);

      useEffect(() => {
        fetch("http://localhost:8000/api/posts/"+id+"/comments",
        {
          method: "GET", // *Type of request GET, POST, PUT, DELETE
          mode: "cors", // Type of mode of the request
          cache: "no-cache", // options like default, no-cache, reload, force-cache
          credentials: "same-origin", // options like include, *same-origin, omit
          headers: {
            "Content-Type": "application/json" // request content type,
            ,
            "Authorization": 'Token ' + localStorage.getItem('token')
            
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
      }
        )
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setcomments(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [post_owner]);



      const handleComment = (e) => {
        e.preventDefault();
        console.log("button clicked! ");
        console.log("commentTxt");
        console.log(commentTxt);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "comment_txt": commentTxt,
            "user": uid,
            "post": id
          })
        };
        fetch("http://localhost:8000/api/comment_insert", requestOptions,
        {
          method: "GET", // *Type of request GET, POST, PUT, DELETE
          mode: "cors", // Type of mode of the request
          cache: "no-cache", // options like default, no-cache, reload, force-cache
          credentials: "same-origin", // options like include, *same-origin, omit
          headers: {
            "Content-Type": "application/json" // request content type,
            ,
            "Authorization": 'Token ' + localStorage.getItem('token')
            
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
      }
        )
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // setcomments(data);
            setcommentTxt("");
          }
          )
          .catch(error => console.log('error', error));
        
      }

      const navigate = useNavigate();
      const navigateToSpecificTag = (tagname) => {
        // 👇️ navigate to /contacts
        navigate('/post_with_tags/'+tagname);
      };

    const getTag = tag => {

        return (
        
          <Button variant="outlined" color="primary" sx={{
            marginRight:2
          }} onClick={() => {navigateToSpecificTag(tag); console.log(tag); }}>   
          {tag} 
          
          </Button>
        );
    };


    const getComment = comment => {
        return (
        
          <CommentCard comment={comment}/>
    
        );
    };



    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
            <Header/>
            </Grid>
     
            <Grid container  marginLeft={3} marginRight={3} >

                
                <Grid container item xs={12} >
                <Grid item  container direction='row' xs={12} sx={{backgroundColor:'#f5f5f5'}}>
                    
                    <Paper  style={{width:'100%',backgroundImage: `url(${"https://c4.wallpaperflare.com/wallpaper/835/238/511/blurry-wallpaper-preview.jpg"})`}}>
                    {/* <Grid item sm={2}/> */}
                    
                    {/* <Grid item> */}
                    <center>
                    <ButtonBase sx={{ width: '99%', maxHeight: '90%',maxWidth:'1080px' }}>
                        <Img src={photo_url} alt='loading..'/>
                    </ButtonBase>
                    </center>
                    {/* </Grid> */}
                    
                    {/* <Grid item sm={2}/> */}
                     
                    </Paper>
                    
                </Grid>

                
                <Grid item container>

                        <Grid item xs={12}>
                        <hr></hr>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={2}> 
                        

                        <Grid item xs={2}> 
                        <ThumbUpIcon onClick={handleLikeClick} style={isLike ? colorStyle : null}></ThumbUpIcon>
                        
                        
                        </Grid>
                        {/* <Grid item xs={2}> 
                        <ThumbDownIcon onClick={handleDislikeClick}></ThumbDownIcon>
                        </Grid>
                         */}

                        <Grid item xs={2}> {numLike.num_likes}   </Grid>

                        </Grid>    
                        <Grid item xs={2}>
                        <IconButton size="small"><AddPhotoAlternateIcon onClick={handleAddToGalleryClick}/></IconButton>
                        <Modal
                      open={addToGalleryOpen}
                      onClose={handleAddToGalleryClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Select a gallery
                        </Typography>
                        {galleries?.map(gallery=>getGallery(gallery))}
                      </Box>
                    </Modal>
                        <Grid item xs={4}></Grid>
                         </Grid>    
                         <Grid item xs={12}>
                        <hr></hr>
                        </Grid>
                </Grid>

     
                <Grid item container xs={12} wrap="nowrap" spacing={2} >
                      <Grid item sx={{rightMargin:3}}>
                        <Avatar 
                        alt={post_owner.name} 
                        src={post_owner.photo_url}
              // ************ problem here ***************************************//
                        sx={{ width: 56, height: 56 }} />
                      </Grid>
                      <Grid  item justifyContent="left" >
                 
                      <h3 style={{ margin: 0, textAlign: "left" }}>{post_title}</h3>
                        <Typography
            // variant="h6"
            noWrap
            component="a"
            href=""
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
             {post_owner.name}
             
          </Typography>

                      
                      </Grid>
                  
                  </Grid>

                </Grid>
                
                <Grid item container sx={{marginTop:2}}>

                  
                <Grid item xs={1.5} >
                
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                         <CategoryOutlinedIcon sx={{marginRight:2}}/>
                        Category
                        </Typography>

                </Grid>
                <Grid item xs={10.5}><Button variant="outlined" color="primary">   {category} </Button> </Grid>
                </Grid>

                
                  

                  
               

                {/* 4th row */}
                <Grid item container sx={{marginTop:2}}>
                <Grid item xs={1.5} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                          <StyleOutlinedIcon sx={{marginRight:2}}/>
                        Tags
                        </Typography>

                </Grid>
                <Grid item xs={10.5} >{tags?.map(tag => getTag(tag))}</Grid>
                
                
                </Grid>



                <Grid item container sx={{marginTop:2}}>
                <Grid item xs={1.5} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                          <LocationOnOutlinedIcon sx={{marginRight:2}}/>
                        Location
                        </Typography>

                </Grid>
                <Grid item xs={10.5} >{place}</Grid>
                {/* <Grid item xs={10.5} >Dhaka</Grid> */}

                
                
                </Grid>



                <Grid item container sx={{marginTop:2}}>
                <Grid item xs={1.5} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                          <AccessTimeOutlinedIcon sx={{marginRight:2}}/>
                        Time
                        </Typography>

                </Grid>  
                {/* toDateString() */}
                <Grid item xs={10.5} ><Time value={post_date} format="YYYY-MM-DD HH:mm"/></Grid>
                {/* <Grid item xs={10.5} >{post_date.toDateString()}</Grid> */}
                
                
                </Grid>

                <Grid container item xs={12}   >

                  <Grid item xs={12} sx={{marginTop:2,marginBottom:2}}>
                  <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                          <CommentIcon sx={{marginRight:2}}/>
                        Comments
                        </Typography>

                  </Grid>
              
                <Grid item xs={10} sx={{marginBottom:2}}>
                <TextField 
                       
                        id="filled-multiline-static"
                        label="Add a Comment"
                        multiline
                        fullWidth 
                        size="medium"
                        defaultValue=""
                        variant="outlined"
                        onInputCapture={(e) => setcommentTxt(e.target.value)}
                        />
                        
                        
                </Grid>
               
                <Grid item xs={12}>
                <Button variant='contained' onClick={handleComment}>Submit</Button>
                </Grid>
                
                
                {comments.map(comment => getComment(comment))}
         
                
                </Grid>
            </Grid>

        {/* etar baire header contianer */}
        </Grid>  
                        
    
    );
    }

    export default Post;