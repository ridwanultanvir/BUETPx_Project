import {React, useState, useEffect,useRef} from "react";
import {storage} from "../Firebase_/Conf";
import {Grid, Button,FormControl,InputLabel,Box, Select, Typography,MenuItem, TextField,Autocomplete, TextareaAutosize, Paper} from "@mui/material";

import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';


const Announce = ()=>{
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [theme, setTheme] = useState();
    const [reward, setReward] = useState();
    const [progress, setProgress] = useState(0);
    const [endDate, setEndDate] = useState();


    const handleChange = (event) => {
        if(event.target.files[0]){
            setFile(event.target.files[0]);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();


    }

    useEffect(()=>{
        if(file){
            const fileName = Date.now() + file.name;
            const uploadTask = storage.ref(`questimages/${fileName}`).put(file);
            uploadTask.on('state_changed',
            (snapshot) => {
                const progres = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progres);
    
            },
    
            (error) => {
                console.log(error);
            },
            () => {
                storage
                .ref('questimages')
                .child(fileName)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    setImageUrl(url);
                    
                    
                })
            });
        }

    } ,[file])

    return(
        <div>
            <Grid container sx={{backgroundColor:'#f5f5f5', paddingBottom:'100px'}} >
                <Grid item xs={12} sm={4}  />
                
                {/* image preview section */}
                
                {/* image preview section ends */}
               
                <Grid item xs={3} container direction='column' spacing={2} >
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    
                    

                    <Grid item>
                        <TextField id="title" label="Title" 
                             onChange={e => {
                                setTitle(e.target.value)
                             }}
                             sx={{ width: 450 }}
                        />


                    </Grid>

                    <Grid item>
                        <TextField
                            id="description"
                            multiline
                            rows={2}
                            maxRows={5}
                            label="Brief Description"
                            
                            onChange={e => setDescription(e.target.value)}
                            sx={{ width: 450 }}
                        />
                       
                    </Grid>
                    <Grid item>
                        <TextField
                            id="theme"
                            multiline
                            rows={2}
                            maxRows={5}
                            label="Describe Theme"
                            
                            onChange={e => setTheme(e.target.value)}
                            sx={{ width: 450 }}
                        />
                       
                    </Grid>
                    

                    <Grid item>
                        <Stack>
                        <Button variant="outlined" component="label" color="primary" style={{
                           
                            width: "200px",
                            height: "50px",
                           
                        
                        
                        
                        }} endIcon={<AttachmentIcon/>} >

                            Attach File
                        <input hidden multiple type="file" onChangeCapture={handleChange}/>
                        </Button>
                        <progress value={progress} max={100} />
                        
                        

                    
                        </Stack>
                    </Grid>
                    

                    <Grid item>
                        <TextField id="reward" label="Prize" 
                             onChange={e => {
                                setReward(e.target.value)
                             }}
                             sx={{ width: 450 }}
                        />


                    </Grid>

                    <Grid item>
                    
                        <TextField
                            id="outlined-basic"
                            label="End Date"
                            variant="outlined"
                            // value={dueDate}
                            type='datetime-local'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setEndDate(e.target.value)}
                            sx={{ width: 450 }}
                            
                            />
                
                    </Grid>
      
                    <Grid item >
                        {/* <Grid item sm={2}/> */}
                        <Button variant="contained" sx={{ width: 450 }}
                        onClick={
                           handleSubmit
                        }
                        
                        endIcon={<SendIcon />}
                        >
                            Announce 
                        </Button>
                        {/* <Grid item sm={2}/> */}
                    </Grid>

                    <Grid item/>
                    <Grid item/>
                    

                    
                    
                </Grid>

                

                <Grid item xs={1} />

            </Grid>
        </div>
    );
}

export default Announce;

{/*
<Grid item xs={7} container  >
                    
                    <Grid item xs = {12} sm={12} spacing={2}>
                        <Paper  style={{padding: '10px', backgroundColor:'#f5f5f5'}} >
                            <Grid container  justify="center" alignItems="center">
                            <Grid item sm={5}/>
                            <Grid item>
                            <Typography variant="h6" style={{fontSize:'20',fontFamily:'sans-serif'}}>
                                PREVIEW</Typography>
                            </Grid>
                            <Grid item sm={5}/>
                            </Grid>
                        </Paper>      
                       
                    
                    

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12} sm={6}>
                            
                        <Grid item>
                            <h4>image here</h4>
                        </Grid>

                        </Grid>
                    </Grid>
                   
                    

                    <Grid item sm={10}/>

                    <Grid item sm={1}>
                        
                    </Grid>


                </Grid>*/}