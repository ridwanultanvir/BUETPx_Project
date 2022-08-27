import React from 'react';
import { Grid } from '@mui/material';
import Top from './Top';
import Header from '../../Static/Header';
// import DiscoverContent from './Discover_Content';
import DiscoverContent from './DiscoverContent';
import FilterDrawer from './Drawer_Filter';
import Options from './Options';
import Divider from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import {useState, useEffect} from "react";

const Discover  = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    useEffect(() => {
    fetch("http://localhost:8000/api/post_detail")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setPostList(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])
        return (
            <div>
                
            <Grid container direction="column">
                <Grid item >
                <Header />
                </Grid>
                <Grid item>
                    <h2> </h2>
                </Grid>
                <Grid item container >
                    <Grid item xs = {0} sm = {2}>
                    <h1>Discover</h1>
                    </Grid>
                    <Grid item xs = {0} sm = {2}>
                    <Options/>

                    </Grid>
                    <Grid item xs = {12} sm = {8}>
                        {/* Search AppBar */}

                    </Grid>
                    {/* <Divider/> */}
                </Grid>
                <Grid item container>
                    <Grid item xs={0} sm={2}>
                        <FilterDrawer />                      
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <DiscoverContent postlist={postList} />

                    </Grid>

                </Grid>
            </Grid>
            </div>
        );
    }


export default Discover;