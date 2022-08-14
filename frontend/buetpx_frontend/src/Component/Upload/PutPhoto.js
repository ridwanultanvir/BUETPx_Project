import {React, useState, useEffect,useRef} from "react";
import {storage} from "../Firebase_/Conf";
import UploadDetail from "./UploadDetail";
import {Grid, Button,FormControl,InputLabel,Box, Select, Typography,MenuItem, TextField,Autocomplete, TextareaAutosize, Paper} from "@mui/material";
import Header from "../../Static/Header";
import useStyles from './ImageStyle';
import Panel from './Panel';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


const FireUpload = () => {
    
    const classes = useStyles();
    const fileInput = useRef();
    const [PlaceID,setPlace]=useState();
    const [CatID,setCat]=useState();
    const places=[
        {id:1,name: 'Azimpur',city:'Dhaka',country: 'Bangladesh'},
        {id:2,name: 'Sonaimuri',city:'Noakhali',country: 'Bangladesh'},
        {id:3,name: 'Padma',city:'Rajshahi',country: 'Bangladesh'},
    ]

    const privacy=['public','only me']
    const [CategoryList, setCategoryList] = useState([]);
    const [Category, setCategory] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([{url: null, file:null}]);
    const [url, setUrl] = useState(null);
    const [urlList, setImgList] = useState([]);
    const [progress, setProgress] = useState(0);

    
    const getPlaceByID = (id) => {
        const place = places.find(place => place.id === id);
        if (place)
            return place.name;
        else
            return id;
    };
    
    

    const getCategory=category=>{
        return(
            <MenuItem value={category.id}>{category.name}</MenuItem>
        )
    }

 

    const handleChange = (e) => {
        // fileInput.current.click();
        
        if(e.target.files[0]){
            // setFile(fileInput.current.files[0]);
            setFile(e.target.files[0]);
            // set files url:url  file:e.target.files[0]
            // setFiles([...files, {url: url, file:e.target.files[0]}]);
            // setFiles([...files, {file:e.target.files[0]}]);

        }
    }

    useEffect(() => {

        // console.log("file: ",file);
        if(file)
    
        {

            console.log("uploading");
           
       
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
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
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                setUrl(url);
                setImgList([...urlList, url]);
                // set url:url
                setFiles([...files, {url: url, file:file}]);


            })
        });
        }
    }, [file]);

    useEffect(() => {
        if(files)
        {
            console.log("files:", files);
            
        }
    }, [files]);
    useEffect(() => {
        if(url)
        {
            setComponent (
                <Panel url={url}/>
            );
        }
    }, [url]);
    

    const handleupload = () => {

        

        console.log("uploading");
        if(file)
        {
       
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        },

        (error) => {
            console.log(error);
        },
        () => {
            storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                setUrl(url);
                setImgList([...urlList, url]);
    //             // set url:url
                // setFiles([...files, {url: url, file:file}]);


            })
        });
    }
    else{
        console.log("no file selected");
    }
    };


    console.log("progress: ", progress);

    const [Component, setComponent] = useState(
        
        <div>
            <Grid container spacing={24}>
                {/* put the rounded upload button in center */}
                <Grid item xs={12}/>
                
                <Grid item  container>
                    <Grid item xs={5}/>
                    <Grid item xs={2} >
                    <Stack>
                    <Button variant="contained" component="label" color="primary" style={{
                        margin: "auto",
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: "200px",
                        height: "50px",
                        borderRadius: "100px",
                       
                    
                    }}>
                        Upload
                    <input hidden accept="image/*" multiple type="file" onChangeCapture={handleChange}/>
                    </Button>
                    <Typography variant="h6">{progress}%</Typography>
                    </Stack>
                    <Paper className="paper" style={{
                        margin: "auto",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        width: "200px",
                        // backgroundColor set to ash
                        backgroundColor: "#f5f5f5",
                    }}>
                          <center>
                          <p>
                            You can upload image file only
                          </p>
                          </center>
                     </Paper>
                   
                </Grid>
                <Grid item xs={5}/>
                </Grid>
               
                </Grid>
                
        </div>
    );
    
    useEffect(() => {
        setComponent(
            <div>
            
            <Grid container spacing={24}>
                {/* put the rounded upload button in center */}
                <Grid item xs={12}/>
                
                <Grid item  container>
                    <Grid item xs={5}/>
                    <Grid item xs={2} >
                    <Stack direction="row" alignItems="center" spacing={2}>

                    <Button variant="contained" component="label"  color="primary" style={{
                        margin: "auto",
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: "200px",
                        height: "50px",
                        borderRadius: "100px",
                       
                    
                    }}>
                        Upload
                    <input hidden accept="image/*" multiple type="file" onChangeCapture={handleChange}/>
                    </Button>
                    
                    <Typography variant="h6">{progress}%</Typography>
                    </Stack>
                    <Paper className="paper" style={{
                        margin: "auto",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        width: "200px",
                        // backgroundColor set to ash
                        backgroundColor: "#f5f5f5",
                    }}>
                          <center>
                          <p>
                            You can upload image file only
                          </p>
                          </center>
                     </Paper>
                   
                </Grid>
                <Grid item xs={5}/>
                </Grid>
               
                </Grid>
        </div>
        );
    }, [progress]);


       


    return(
        <div>
            <Header/>
          {Component}
          
          <br/>
        </div>
    );
};

export default FireUpload;


// <Grid container direction="column" spacing={5}>
//                 <Grid item sm={2} />
//                 <Grid item container>
//                     <Grid item sm={5}/>
//                     <Grid item>
//                         <br/>
                      

//                         <Stack direction="row" alignItems="center" spacing={2}>
//                             <Button variant="contained" component="label" endIcon={<FileUploadIcon/>}>
//                                 Upload
//                                 <input hidden accept="image/*" multiple type="file" onChangeCapture={handleChange}/>
//                             </Button>
//                             <Typography variant="h6">{progress}%</Typography>

//                         </Stack>
                        
                        
                        
//                     </Grid>
//                     <Grid item sm={4}/>
//                 </Grid>
//                 <Grid item container >
//                     <Grid item>
//                         <Paper className={classes.paper}>
//                             <Typography variant="h5" component="h3" sx={{ bgcolor:'#f5f5f5', paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px', paddingBottom:'20px'}}>
//                                Only Image file can be uploaded
//                             </Typography>
//                             </Paper>
//                     </Grid>
//                 </Grid>
//             </Grid>