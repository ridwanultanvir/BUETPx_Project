import React from 'react';
import { Grid,Box,Divider, Paper, Typography } from '@mui/material';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Header from '../../Static/Header';
import ImgCard from '../Quest/ImgCard';
const ExhibitionPhotos = () =>{
    const {id} = useParams();
    console.log(id);

    const [photos, setPhotos] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8000/api/get_shortlisted_photo/'+id,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {

            let posts = [];
            data.forEach(sub=>{
                posts.push(sub.post);
            } )
            setPhotos(posts);
            console.log("photos:", posts);
        }).catch(err => console.log(err));
    }
    , []);

    return(
        <Grid container direction='column'>
            <Grid item>
                <Header/>
            </Grid>
            <Grid item>
            <Grid container spacing={1} sx={{marginLeft:7, marginRight:5}}>
                        
                        {photos.map((item, index) => (
                            <Grid item key={index}>
                                <ImgCard post={item} />
                            </Grid>
                        ))}
                </Grid>
                
            </Grid>
        </Grid>
    );
}

export default ExhibitionPhotos;