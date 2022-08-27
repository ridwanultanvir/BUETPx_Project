import React from 'react';
import {useState, useEffect} from "react";
import {Grid,Button,Typography, TextField} from "@mui/material";
import Header from '../../Static/Header';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const GalleryCard = ({gallery})=>{

    return(
        <div>
            <Button sx={{marginRight:2}} href = {"/Gallery/"+gallery.id} variant='outlined' >{gallery.title}</Button>
        </div>
    )
}

export default GalleryCard