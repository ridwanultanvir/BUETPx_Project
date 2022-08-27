import {Grid, Button,FormControl,InputLabel,Box, Select, Typography,MenuItem, TextField,Autocomplete, TextareaAutosize, Paper, CardActions} from "@mui/material";
import React from "react";
import {Card, CardContent, CardActionArea, CardMedia} from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AwardIcon from '@mui/icons-material/EmojiEventsOutlined';
import {useState, useEffect} from "react";
import AdminHeader from "./Static/AdminHeader";
import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import RemoveIcon from '@mui/icons-material/Clear';
import AnnounceIcon from '@mui/icons-material/Campaign';

const submittedPhotos = [
    {
        id: 1,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false


    },
    {
        id: 2,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false
        

    },
    {
        id: 3,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false
        

    },
    {
        id: 3,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false
        

    },
    {
        id: 3,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false
        

    },
    {
        id: 3,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false
        

    },
    {
        id: 3,
        title: 'People and Culture',
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked: false
        

    },
    
];

const MakeShort = () => {

    const { id } = useParams();

    const [Shortlist, setShortlist] = useState([]);
    const [submissions, setSubmissions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Shortlist);
        const requestBody={
            posts: Shortlist
        }
        const reqOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')}
        ,
            body: JSON.stringify(requestBody)

        }

        fetch(`http://localhost:8000/api/update_post_shortlisted/${id}/`, reqOptions)
        .then(res => res.json())
        .then(data => {
            console.log("response: ",data);
            alert("Shortlisted Successfully");
            
        }).catch(err => {
            console.log(err);
            alert("Something went wrong");
            window.location.reload();


        })
        .finally(() => {
            window.location.href = '/admin/quest';
        }
        )
        ;

    }

    // useEffect(() => {
    //     fetch(`http://localhost:8000/api/shortlist/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setShortlist(data);
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err))

    // }, []);
    useEffect(() => {
        const reqOption = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }


        }

        fetch(`http://localhost:8000/api/get_submission_by_questid/${id}`, reqOption)
        .then(res => res.json())
        .then(data => {
            let posts = [];
            data.forEach(sub => {
                posts.push(sub.post);
            } )
            console.log("posts:", posts);
            const newPosts = posts.map(post => {
                return {
                    ...post,
                    isClicked: false
                }
            } )
            console.log("newPosts:", newPosts);

            setSubmissions(newPosts);
            console.log(data);
        }).catch(err => console.log(err))

    }, []);

    useEffect(() => {
        console.log("Shortlist:", Shortlist);
    }, [Shortlist]);
    

    return(
        <Grid container direction='column'>
            <Grid item>
                <AdminHeader/>
            </Grid>
            <Grid item container spacing={1} sx={{paddingLeft:'80px', paddingRight:'80px',paddingBottom:'10px', maxHeight:550, overflow:'auto'}}>
                {
                    submissions.map(photo => (
                    <Grid item>
                        <Card sx={{ minWidth: 442}}>
                        <CardActionArea onClick={(e)=>{
                            console.log(photo.id);
                            console.log(" selected...");
                            // setSelectedId(quest.id);
                            }}>
                            
                            <CardMedia
                            component="img"
                            height="170"
                            image={photo.photo_url}
                            alt="loading.."
                            />
                           
                            <CardActions>
                                <Button fullWidth variant={photo.isClicked?'outlined':''} color="primary" endIcon={photo.isClicked? <RemoveIcon/>:<AddIcon/> }  onClick={
                                    (e) => {
                                        // add if isClicked is false
                                        if(!photo.isClicked){
                                            setShortlist([...Shortlist, photo.id]);
                                        }
                                        // remove if isClicked is true
                                        else{
                                            // remove from shortlist
                                            setShortlist(Shortlist.filter(item => item.id !== photo.id));

                                        }
                                        photo.isClicked = !photo.isClicked;
                                    }
                                    
                                }
                                sx={photo.isClicked?{backgroundColor:'#f4f4f4'}:{}}
                                
                                >
                                   {/* {photo.isClicked?'Remove':'Add'} */}
                                </Button>
                                
                            </CardActions>
                        </CardActionArea>
                        </Card>
                    </Grid>  
                ))}
            </Grid>
            
            <Grid item container sx={{marginTop:6}}>
                <Grid item sm={4}/>
                <Grid item sm={4}>
                    <Button fullWidth variant="contained" color="primary" endIcon={<AnnounceIcon />} onClick={handleSubmit}
                    sx={{
                        
                    }}
                    >
                        Publish Shortlist
                    </Button>
                </Grid>
                <Grid item sm={4}/>
            </Grid>
            
        </Grid>
    );


}

export default MakeShort;