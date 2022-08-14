import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Header from "../../Static/Header";
import {useState, useEffect} from "react";
import Paper from "@mui/material/Paper";



const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));



const  SignUp=()=> {

    const [user_name, setusername] = useState('');
    const [first_name, setfirstname] = useState('');
    const [last_name, setlastname] = useState('');
    const [user_mail, setusermail] = useState('');
    const [user_pass, setuserpass] = useState('');
    const [user_pass2, setuserpass2] = useState('');
    const classes = useStyles();

    const ButtonClicked = async (event)=>
        {
            // alert('Button clicked!');
            event.preventDefault();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  "username": user_mail,
                  "password":user_pass,
                  "password2":user_pass2,
                  "email": user_mail,
                  "first_name":first_name,
                  "last_name":last_name,
                //   photo url needs to be taken from uploaded photo
                  // "photo_url": 'http://tiny.cc/namira123',
                //   hashing will be done in the backend
                })
              };

              await fetch("http://localhost:8000/api/register", requestOptions)
                .then(async response => 
                  {
                    if (response.ok) {
                    // let user = await response.json()
                    const user=await response.json()
                    console.log(user)
                    window.location.href="\\login";
                    // window.location.reload(false);
                    }
                    else
                    {
                      const error=await response.json()
                      if (error['email'])
                        {
                          console.log(error['email'][0])
                          throw new Error('Email field must be unique')
                        }
                      if(error['password'])
                       {
                        console.log(error['password'][0])
                        throw new Error(error['password'][0])
                       }
                       
                    }
                  }
                  )
                  .catch(error =>
                    {
                      // window.location.reload(false);
                      console.log( error)
                      alert(error)
        
                    });

              //   let response= await fetch("http://localhost:8000/api/register", requestOptions)
              //   // let user = await response.json().then(result=>result.data);
              //   if (response.ok) { 
              //   let user = await response.json();
              //   console.log(user['username'])
              // }
                
      
            
        }

    return (
        <Container component="main" maxWidth="xs">
            <Header/>
        <CssBaseline />


        <div className={classes.paper} >
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={6} >
                <TextField
                    autoComplete="name"
                    name="firstname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    onInputCapture={(e) => setfirstname(e.target.value)}
                    autoFocus
                />
                </Grid>
                <Grid item xs={6} >
                <TextField
                    autoComplete="name"
                    name="lastname"
                    variant="outlined"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    onInputCapture={(e) => setlastname(e.target.value)}
                    
                />
                </Grid>
                {/* <Grid item xs={12} >
                <TextField
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    onInputCapture={(e) => setusername(e.target.value)}
                 
                />
                </Grid> */}
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onInputCapture={(e) => setusermail(e.target.value)}
                    
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                    onInputCapture={(e) => setuserpass(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Confirm Password"
                    type="password"
                    id="password2"
                    // autoComplete="current-password"
                    onInputCapture={(e) => setuserpass2(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>

                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={ButtonClicked}
                >
                    Sign Up
                </Button>
                </Grid>
              <Grid item xs={12} container justify="flex-end">
               
                <Link href="/Login" variant="body2">
                    Already have an account? Sign in
                </Link>
               
            </Grid>
        
            </Grid>
            
            </form>
        </div>

    
        </Container>
    );
}

export default SignUp;
