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
import { useParams } from 'react-router-dom';
import {useState, useEffect} from "react";


const ShowFilteredResult  = (props) => {
    const { catname } = useParams();
    console.log(catname);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setposts] = useState([]);
    

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    let api = "http://localhost:8000/api/posts_by_cat/" + catname;
    useEffect(() => {
    fetch(api)
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setposts(result);
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

    console.log("posts by cat:");
    console.log(posts);

    // api: http://localhost:8000/api/posts/landscape


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
                        <DiscoverContent postlist={posts}/>

                    </Grid>

                </Grid>
            </Grid>
            </div>
        );
}


export default ShowFilteredResult;