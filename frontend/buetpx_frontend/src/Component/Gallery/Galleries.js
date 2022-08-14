import React from 'react';
import {useState, useEffect} from "react";
import {Grid} from "@mui/material";
import Header from '../../Static/Header';

const Galleries = ()=>
{
    const uid=2
    const [user, setuser] = useState([]);  
    const [galleries, setgalleries] = useState([]);

    const getGallery=gallery=>
    {

        return (
            <li><a href = {"/Gallery/"+gallery.id}>{gallery.title}</a></li>
        )
    }

    useEffect(() => {
        if(uid)
        {
          fetch("http://localhost:8000/api/user/"+uid,
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
              setuser(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            // (error) => {
            //   setIsLoaded(true);
            //   setError(error);
            // }
          )
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


      useEffect(() => {
        if(uid)
        {
          fetch("http://localhost:8000/api/galleries/"+uid,
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
              setgalleries(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            // (error) => {
            //   setIsLoaded(true);
            //   setError(error);
            // }
          )
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user]);
    
    return (
        <React.Fragment>
            <Grid container direction='column'>
                <Grid item>
                <Header/>
                </Grid>
                <Grid item container>
                    User Name : {user.name} 
                    <ul>
                    {galleries?.map(gallery=>getGallery(gallery))}
                    </ul>
                    
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Galleries;