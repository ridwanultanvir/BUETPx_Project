import {Grid, Button,FormControl,InputLabel,Box, Select, Typography,MenuItem, TextField,Autocomplete, TextareaAutosize, Paper, CardActions} from "@mui/material";
import React from "react";
import {Card, CardContent, CardActionArea, CardMedia} from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AwardIcon from '@mui/icons-material/EmojiEventsOutlined';
import {useState, useEffect} from "react";
import AdminHeader from "./Static/AdminHeader";




const activeList = [
    {
        id: 1,
        title: 'Quest 1',
        theme:'Theme 1',
        description: 'This is a quest',
        category: 'Adventure',
        
        startDate: '01/08/2022',
        endDate: '2022-09-09 12:12:00',
        status: 'Active',
        photoUrl:'https://i.pinimg.com/originals/fd/c5/4b/fdc54b01e6eabc23673a0415952327e5.jpg',

        reward: 'USD 500',
        

    },
    {
        id: 2,
        title: 'Quest 2',
        description: 'This is a quest',
        category: 'Language',
        goal: 'What is the goal of this quest',
        startDate: '2022-08-01',
        endDate: '2022-09-03 12:12:00',
        status: 'Active',
        photoUrl:'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',

        reward: 'USD 500',
    },
    {
        id: 3,
        title: 'Quest 3',
        description: 'This is a quest',
        category: 'Education',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '2022-09-05 12:12:00',
        status: 'Active',
        photoUrl:'https://images.theoutbound.com/contents/116217/assets/1484947659888?&fit=crop&w=970&q=60',
        reward: 'USD 500',
    },
    {
        id: 4,
        title: 'Quest 4',
        description: 'This is a quest',
        category: 'Culture',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '2022-09-07 12:12:00',
        status: 'Active',
        photoUrl:'https://www.intercultural-europe.org/wp-content/uploads/2021/01/Culture_Folk_Fest_ExpatExplore.jpg',
        reward: 'USD 500',
    },
    {
        id: 5,
        title: 'Quest 5',
        description: 'This is a quest',
        category: 'Technology',
        goal: 'What is the goal of this quest',
        startDate: '2022-08-03',
        endDate: '2022-09-01 12:12:00',
        status: 'Active',
        photoUrl:'https://i.pinimg.com/originals/64/bd/87/64bd87ae69d911486d5c5f63fc508832.jpg',
        reward: 'USD 500',
    }

];

const ShortListQuest = ()=>{

  const [selectedId, setSelectedId] = useState(null);
  const [questList, setQuestList] = useState(activeList);
  const [toRemove,setToRemove] = useState(null);

  useEffect(() => {
      if(selectedId){
        // redirect to /quest/id
        window.location.href = `/admin/quest/${selectedId}`;
      }
  },[selectedId])

  useEffect(() => {
    if(toRemove){

    
    // setQuestList(questList.filter(quest => quest.id !== toRemove));

      const reqOption = {
        method: 'PUT',
        headers: {

            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
            
      }
      ,
        body: JSON.stringify({ status: 'Ended' })  
    };
    fetch(`http://localhost:8000/api/update_quest_status/${toRemove}`, reqOption)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    }).finally(() => {

        // modify status of quest to ended
        questList.map(quest => {
            if(quest.id === toRemove){
                quest.status = 'Ended';
            }
        } )
        setToRemove(null);
    }
    );

    }
  },[toRemove])

   const getTImeLeft = (endDate) =>  {
        const endDate1 = new Date(endDate);
        const currentDate = new Date();
        const timeLeft = endDate1.getTime() - currentDate.getTime();
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        return `${days} days ${hours} hours left`;

   }

   useEffect(() => {
    const requestOptions = {
      method: 'GET',
     headers: { 'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    } 
     

    };

    fetch('http://localhost:8000/api/get_all_quests', requestOptions)
    .then(response => response.json())
    .then(data => {

      setQuestList(data);
      console.log(data);

    }).catch(error => {
      console.log(error);

    }
    )
  }, []);
   
    return(
        <Grid container direction='column'>
        <Grid item>
            <AdminHeader/>
        </Grid>
        <Grid item>
            <Grid container spacing={2} sx={{paddingLeft:'80px', paddingRight:'80px',paddingBottom:'10px'}}>
                {
                    questList.map(quest => (
                    <Grid item>
                        <Card sx={{ minWidth: 442, maxWidth:442}}>
                        <CardActionArea onClick={(e)=>{
                            console.log(quest.id);
                            console.log(" selected...");
                            setSelectedId(quest.id);
                            }}>
                            
                            <CardMedia
                            component="img"
                            height="140"
                            image={quest.photoUrl}
                            alt="loading.."
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {quest.title}
                            </Typography>
                           
                            
                            <Grid container spacing={1} direction='column' sx={{paddingTop:'10px'}}>
                                <Grid item container spacing={2}>
                                    <Grid item >
                                    <AccessTimeFilledIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" color="text.secondary" sx={{paddingTop:'3px'}}>
                                        {getTImeLeft(quest.endDate)}

                                        </Typography>
                                    </Grid>

                                </Grid>
                                <Grid item container spacing={2}>
                                    <Grid item >
                                    <AwardIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" color="text.secondary" sx={{paddingTop:'3px'}}>
                                        {quest.reward}

                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            </CardContent>
                            <CardActions>
                            <Button  variant='outlined' color="primary" fullWidth disabled={quest.status.toLowerCase() === 'active' ? false : true} 
                            onClick={(e)=>{
                                setToRemove(quest.id);
                            }}
                            >
                                {
                                    // compare case insensitive
                                    quest.status.toLowerCase() === 'active' ? 'End Quest' : 'Quest Ended'
                                }
                            </Button>
                            </CardActions>
                        </CardActionArea>
                        </Card>
                    </Grid>  
                ))}
            </Grid>
        </Grid>

    </Grid>
    );
}

export default ShortListQuest;