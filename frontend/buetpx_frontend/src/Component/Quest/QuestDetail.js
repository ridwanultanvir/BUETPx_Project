import React from 'react';
import { Grid,Box, Paper, Typography } from '@mui/material';


import Header from '../../Static/Header';
import {Divider, Button} from '@mui/material';

import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEventsOutlined';
import "./Style.css";

const aQuest = {
    id: 4,
        title: 'Capture the moment',
        description: 'This is a quest',
        category: 'Culture',
        theme: "Autumn Inspired. Pay homage to the seasonal shift to autumn, it's time to be grate-fall. Through warm tones, intentional contrast and use of color your images should clearly link to Autumn, a time of renewal and change.",
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022  10:10:10',
        endDate: '2022-09-07 12:12:00',
        status: 'Active',
        photoUrl:'https://wallpaperaccess.com/full/6913161.jpg',
        reward: 'USD 500',
}

const posts=[
    {   
        id:1,
        photo_url:'https://www.intercultural-europe.org/wp-content/uploads/2021/01/Culture_Folk_Fest_ExpatExplore.jpg',
        isClicked:false
    },
    {   
        id:2,
        photo_url:'https://i.pinimg.com/originals/fd/c5/4b/fdc54b01e6eabc23673a0415952327e5.jpg',
        isClicked:false
    },
    {
        id:3,
        photo_url: 'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        isClicked:false
    }
];
    

const QuestDetail = () => {
    const {questId} = useParams();
    const Uid = localStorage.getItem('uid')?parseInt(localStorage.getItem('uid')):3;
    console.log("Uid:",Uid);

    const [option, setoption] = useState(1);
    const [quest, setquest] = useState(aQuest);
    const [postList, setpostList] = useState([]);

    const [open, setOpen] = useState(false);
    const [selectedImages,setSelectedImages]= useState([]);
    const [selectedPhoto,setSelectedPhoto]= useState();
    const [flag, setFlag] = useState(false);
    const [imageComponent, setImageComponent] = useState(
        <div>
            
        </div>
    );


    const handleSubmit = () => {
        setOpen(false);
        


      };
    // const handlePhotoSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log('post id:', selectedPhoto)
    //     setFlag(true);
    //     setOpen(false);

    // }
    

    useEffect(() => {
        if(selectedPhoto){
            // setOpen(false);
            console.log("selectedPhoto",selectedPhoto);
            const requestBody ={
                quest: questId,
                post: selectedPhoto,
                shortlisted: 0
            

            }
            console.log("requestBody",requestBody);
            const reqOptions = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token')
                },
                body: JSON.stringify(requestBody)
            }

            fetch('http://localhost:8000/api/insert_submission',reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log("response",data);
                alert("Submission Successful");
                // remove the selected photo from the list
                setpostList([...postList.filter(post => post.id !== selectedPhoto)]);
                // // reload page
                // window.location.reload();
            }).catch(err => console.log(err));
        





            // submit to quest 

        }
    }, [selectedPhoto]);


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
           headers: { 'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
        } 
    };

      
    fetch(`http://localhost:8000/api/quest_by_id/${questId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setquest(data);
           
            
            // setquest(data);
        })
        .catch(error => console.log('error', error));

        
        
    }, []);

    // fetch posts by uid

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
           headers: { 'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
        } 
    };

      
        fetch(`http://localhost:8000/api/get_posts_by_userid/${Uid}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("data",data);
            const newPosts = data.map(
                (post) => {
                    return {
                        ...post,
                        isClicked: false
                    }
                }
            )
            setpostList(newPosts);
            console.log("newPosts:",newPosts);

        }).catch(error => console.log('error', error));
    }, []);


    useEffect(() => {
        setImageComponent(
            <Grid container spacing={1}>
                {postList.map(post => (
                    <Grid item >
                    {/* put a button a image */}
                    <Button variant='outlined' color='primary'
                     
                    
                    onClick={()=>{
                        console.log('clicked');

                        // add to selectedImages
                       

                            setSelectedImages([...selectedImages,post]);
                            setSelectedPhoto(post.id);
                            handleSubmit();
                        
                       




                        
                        // handleSubmit();
                        
                    }}
                    endIcon={<AddIcon/>}>
                        <img  src={post.photo_url} alt='img' width='200px' height='200px'/>
                    </Button>

                </Grid>
                ))}
            </Grid>
        )

    }, [postList]);


    useEffect(() => {
        console.log(selectedImages);
    }, [selectedImages]);



    const handleClickOpen = () => {
        setOpen(true);
      };
    
      

   
    
  const formatDate = (date) => {
    // format to i.e 6 jan, saturday at 3:00pm
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";

    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = n  + ", "+mon +" " + day + ", " + year + " at " + h + ":" + m;
    return date;
  }

  const handleChangeMultiple = (event) => {
    
  };

    return (
        <Grid container spacing={1} direction='column'>
            <Grid item>
                <Header/>
            </Grid>
            <Grid item container direction='column' >
                <Grid item>
                    {/* <img src={quest.photoUrl} alt='img'maxHeight='300'/> */}
                </Grid>S
                <Grid item>
                    <Paper sx={{paddingBottom:'20px'}}>
                        <center>
                        <Typography sx={{fontSize:'h4.fontSize',fontWeight:'bold'}}>{quest.title}</Typography>
                        {/* submission button */}
                        <Button variant='contained' color='primary' 
                        onClick={()=>{
                            setOpen(true);
                        }}
                        sx={{   
                            marginTop:'20px',
                            marginBottom:'20px',
                            width:'250px',
                            height:'50px',
                            
                            borderRadius:'20px',
                            border:'1px solid #fff',
                            
                            boxShadow:'0px 0px 10px #00bcd4',
                            textTransform:'none',
                    
                    }}>Submit your photos</Button>

                        </center>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper sx={{ paddingTop:'20px' ,backgroundColor:'#f5f5f5', minHeight:'760px'}}>
                        
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px',marginTop:2, fontSize:'h5.fontSize' ,fontWeight:'bold'}}> <DescriptionOutlinedIcon sx={{paddingRight:'4px'}} />Description </Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}>{quest.description}</Typography>
                    
                   
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px',marginTop:2, fontSize:'h5.fontSize',fontWeight:'bold'}}> <CategoryIcon sx={{paddingRight:'4px'}}/>Theme</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}>{quest.theme}</Typography>
                    
                    
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px',marginTop:2, fontSize:'h5.fontSize',fontWeight:'bold'}}><TimelapseOutlinedIcon sx={{paddingRight:'4px'}}/>Timing</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}> Starts: {formatDate(quest.startDate)}</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}> Ends: {formatDate(quest.endDate)}</Typography>

                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px',marginTop:5, fontSize:'h5.fontSize',fontWeight:'bold'}}><EmojiEventsIcon sx={{paddingRight:'4px'}}/>Prize</Typography>
                    <Typography sx={{paddingLeft:'50px', paddingRight:'50px'}}> Reward: {quest.reward}</Typography>


                            

                        
                    </Paper>
                </Grid>
                
            </Grid>

            <Dialog
                fullWidth={true}
                maxWidth='md'
                
                open={open}
                onClose={handleSubmit}
            >

                <DialogTitle>Submit Photos</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can submit photos for this quest here.
                    </DialogContentText>

                    <Paper sx={{paddingTop:'20px', paddingLeft:'20px',paddingBottom:'20px',paddingRight:'20px'}}>
                        {/* show a image */}
                        <center>
                            <Grid container spacing={1}>
                               
                                    

                                {imageComponent}
                                        
                                
                                
                               
                            </Grid>

                            
                        </center>
                    </Paper>
                    
                

                
                </DialogContent>
                <DialogActions>
                {/* <Button variant='contained' onClick={handlePhotoSubmit}>Submit </Button> */}
                </DialogActions>
            </Dialog>

        </Grid>
    );


}

export default QuestDetail;