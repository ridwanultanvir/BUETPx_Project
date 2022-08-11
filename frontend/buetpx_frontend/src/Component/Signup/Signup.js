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
    const [user_mail, setusermail] = useState('');
    const [user_pass, setuserpass] = useState('');
    const classes = useStyles();

    const ButtonClicked =(event)=>
        {
            // alert('Button clicked!');
            event.preventDefault();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  "name": user_name,
                  "email": user_mail,
                //   photo url needs to be taken from uploaded photo
                  "photo_url": 'http://tiny.cc/namira123',
                //   hashing will be done in the backend
                  "hashedpass":user_pass
                })
              };
              fetch("http://localhost:8000/api/signup", requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                
                  }
                  )
                .catch(error => console.log('error', error));
                window.location.reload(false);
            
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
                <Grid item xs={12} >
                <TextField
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    onInputCapture={(e) => setusername(e.target.value)}
                    autoFocus
                />
                </Grid>
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
                    autoComplete="current-password"
                    onInputCapture={(e) => setuserpass(e.target.value)}
                />
                </Grid>
        
            </Grid>
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
            <Grid container justify="flex-end">
                <Grid item>
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
