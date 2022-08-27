import React from 'react';
import {useState, useEffect} from "react";
import {Grid,Button,Typography, TextField} from "@mui/material";
import Header from '../../Static/Header';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const GalleriesBody = (props)=>
{
    const {uid}=props;
  
    //need to make this dynamic
    
    const [user, setuser] = useState([]);  
    const [galleries, setgalleries] = useState([]);
    const [new_gallery_title, setnew_gallery_title] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getGallery=gallery=>
    {

        return(
          <Button sx={{marginRight:2}} href = {"/Gallery/"+gallery.id} variant='outlined' >{gallery.title}</Button>
        )
    }

    const addGallery=()=>
    {
          fetch("http://localhost:8000/api/add_gallery",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":'Token '+localStorage.getItem('token')
                },
                body:JSON.stringify({
                  'title':new_gallery_title,
                  'owner':uid
                })
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                handleClose();
                window.location.reload();
            })
            .catch(err=>
              {
                console.log(err)
                alert("Title must not be empty!")
              })

            
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
      }, [uid]);


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
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                    Galleries
                    </Typography>
                    </Grid>
                    <Grid item container>
                    <Button sx={{marginRight:2}} onClick={handleOpen}>Add New</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Enter the gallery name:
                        </Typography>
                        <TextField onInputCapture={(e) => setnew_gallery_title(e.target.value)}/>
                        <Button onClick={addGallery}>Add</Button>
                      </Box>
                    </Modal>

                    {galleries?.map(gallery=>getGallery(gallery))}
                
                    
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default GalleriesBody;