import React from 'react';
import {useState, useEffect} from "react";
import {Grid,Button,Typography,Paper, Avatar, IconButton, Tabs,Tab} from "@mui/material";
import Header from '../../Static/Header';
import PhotosBody from "./PhotosBody";
import GalleriesBody from "./GalleriesBody";

import UserDetailBody from "./UserDetailBody";


const UserProfile = ()=>
{
   
    //need to make this dynamic
    
    const [user, setuser] = useState([]);  
    const [uid,setuid]=useState([]);
    useEffect(() => {
        async function fetchData() {
         fetch(`http://localhost:8000/api/getuserdetails`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Token " + localStorage.getItem("token")}
          }
            )
        .then(res => res.json())
        .then(data => {
            console.log("user data",data)
            setuser(data)
            
        }).catch(err => console.log(err)) 
     }
        fetchData();
    } , [])

    // setuid(user['id'])

    useEffect(() => {
        async function fetchData() {
         fetch(`http://localhost:8000/api/getaccidfromuid/${user['id']}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Token " + localStorage.getItem("token")}
          }
            )
        .then(res => res.json())
        .then(data => {
            console.log("user data",data)
            setuid(data)
            
        }).catch(err => console.log(err)) 
     }
        fetchData();
    } , [user])



    const [component, setcomponent] = useState(<PhotosBody {...uid}/>);
    const [tab, settab] = useState('Photos');
    


    useEffect(()=>{
        // if(tab=== 'Profile'){
        //     setcomponent(<UserDetailBody {...user}/>)
        // }
        // else 
        if(tab=== 'Photos'){
            setcomponent(<PhotosBody uid={uid}/>)
        }
        else if(tab=== 'Galleries'){
            setcomponent(<GalleriesBody uid={uid}/>)
        }
        else{
            setcomponent(<UserDetailBody {...user}/>)
        }
    },[user,uid,tab])

    const onTabChange = (e, value) => {
        console.log("value",value);
        settab(value);
    }


    return(
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <Header/>
                </Grid>
                <Grid item container direction="column">
                    <Grid item xs={12}>
                      <center><Avatar alt={user.first_name} src={user.photo_url} />
                                <Typography variant="h5"> 
                                    {user.first_name} {user.last_name}
                                </Typography>
                                <Typography variant="h6"> 
                                    {user.email}
                                </Typography>
                            </center>
                    </Grid>

                    <Grid item container xs={12} justifyContent="center">
                        
                        <Tabs
                        value={tab}
                        onChange={onTabChange}
                        indicatorColor="primary"
                        textColor="primary">
                            {/* <Tab value="Profile" label="Profile" /> */}
                            <Tab value="Photos" label="Photos" />
                            <Tab value="Galleries" label="Galleries" />

                        </Tabs>
                    </Grid>
                    <Grid item xs={12}>
                        {component}
                    </Grid>

                </Grid>

            </Grid>
            
        </div>
    )                         


}

export default UserProfile;