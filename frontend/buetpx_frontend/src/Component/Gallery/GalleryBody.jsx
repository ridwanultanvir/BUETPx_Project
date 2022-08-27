import React, { Component } from "react";
import Card from "../../Static/Card";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImgPost from '../ImageList/ImgPost'; 
import { Grid } from "@mui/material";
import {
    useParams,
  } from "react-router-dom";
// import photoList from "./Constants";

import {useState, useEffect} from "react";

const GalleryBody =()=>{
    const { id } = useParams();

    const [error, seterror] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [photoList, setphotoList] = useState([]);
    const [galleryName, setgalleryName] = useState("");
        
  
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/gallery/"+id,
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
        // fetch("http://127.0.0.1:8000/api/getposts")
        .then(res => res.json())
        .then(
            (result) => {
            setisLoaded(true);
            setphotoList(result['posts']);
            setgalleryName(result['gallery_name']);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            
            setisLoaded(true);
            seterror(error);
            }
        )
        }, [id] )

        const getPhotoCard = (photoObj) => {
            return (
                <Grid item 
                >
                <ImgPost {...photoObj} />
                </Grid>
            );
        }

        const noPhotoInList=()=>
        {
            return (
                <Grid item xs={12} sm={6} md={6} lg={4} sx={{
                    color: "gray",
                    fontSize: "1.5rem",
                }}>
                    No Photo in this gallery
                </Grid>
            );
        }

    
        return (
                    <Grid container spacing={2} >

                        <Grid item xs={12} alignContent="center">
                            <h1>{galleryName}</h1>
                        </Grid>
                        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <ImageList variant="masonry" cols={4} gap={10}>
                                {/* {posts.map((post) => (
                                <ImgPost {...post}/> */}
                                {photoList.length===0 ? noPhotoInList():photoList.map(photoObj => getPhotoCard(photoObj))}
                                {/* ))} */}
                            </ImageList>
                        </Box>
                     
                            
                   
                    </Grid>
                );
        


}
export default GalleryBody;