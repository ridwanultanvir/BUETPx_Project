import React from 'react';
import { Grid,Box, Paper, Typography } from '@mui/material';
import {FormLabel,FormControl,Select,InputLabel,FormGroup,MenuItem, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Header from '../../Static/Header';
import {Divider, Button} from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import CameraEnhanceTwoToneIcon from '@mui/icons-material/CameraEnhanceTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import TagTwoToneIcon from '@mui/icons-material/TagTwoTone';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ShortList from './ShortList';
import Brief from './Brief';
import AddIcon from '@mui/icons-material/Add';
import "./Style.css";

const aQuest = {
    id: 4,
        title: 'Quest 4',
        description: 'This is a quest',
        category: 'Culture',
        theme: "Autumn Inspired. Pay homage to the seasonal shift to autumn, it's time to be grate-fall. Through warm tones, intentional contrast and use of color your images should clearly link to Autumn, a time of renewal and change.",
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022  10:10:10',
        endDate: '2022-09-07 12:12:00',
        status: 'Active',
        photoUrl:'https://www.intercultural-europe.org/wp-content/uploads/2021/01/Culture_Folk_Fest_ExpatExplore.jpg',
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
    

const EndedQuestDetail = () => {
    const {questId} = useParams();
   

    const [option, setoption] = useState(1);
    const [quest, setquest] = useState(aQuest);
    const [open, setOpen] = useState(false);
    const [selectedImages,setSelectedImages]= useState([]);
    const [component, setComponent] = useState(
        <Brief quest={quest}/>
      );
    const [imageComponent, setImageComponent] = useState(
        <div>
            
        </div>
    );

    useEffect(() => {
        setImageComponent(
            <Grid container spacing={1}>
                {posts.map(post => (
                    <Grid item >
                    {/* put a button a image */}
                    <Button variant='outlined' color='primary'
                     disabled={post.isClicked}
                    
                    onClick={()=>{
                        console.log('clicked');
                        // add to selectedImages
                        setSelectedImages([...selectedImages,post]);
                        
                    }}
                    endIcon={<AddIcon/>}>
                        <img  src={post.photo_url} alt='img' width='200px' height='200px'/>
                    </Button>

                </Grid>
                ))}
            </Grid>
        )

    }, [posts]);

    useEffect(() => {
        console.log(selectedImages);
    }, [selectedImages]);



    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
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
  const [value, setValue] = useState('brief');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if(value==='brief'){
        setComponent(<Brief quest={quest}/>);
    }
    else if(value==='short'){
        setComponent(
            <ShortList/>

        );
    }
  }, [value]);

  const handleChangeMultiple = (event) => {
    
  };

    return (
        <Grid container spacing={1} direction='column'>
            <Grid item>
                <Header/>
            </Grid>
            <Grid item container direction='column'>
                {/* <Grid item>
                    <h1>Photo</h1>
                </Grid> */}
                <Grid item>
                    <Paper sx={{paddingTop:'20px'}}>
                        <center>
                        <Typography sx={{fontSize:'h4.fontSize' ,fontWeight:'bold'}}>{quest.title}</Typography>
                        </center>
                        <Grid container>
                            <Grid item sm={5.2}/>
                            
                            <Grid item >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    
                                >
                                    <Tab value="brief" label="Brief" />
                                    <Tab value="short" label="Shortlist" />
                                </Tabs>
                            </Grid>
                            <Grid item sm={4}/>
                        </Grid>
                    </Paper>
                </Grid>
                

                
                {component}
                
            </Grid>

            

        </Grid>
    );


}

export default EndedQuestDetail;