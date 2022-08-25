import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import authService from "./authService";
import Header from "../../Static/Header"
import {useState, useEffect} from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide(props) {

//   if(authService.isLoggedIn()){

//     props.history.push("./home");

//   }

const [user_mail, setusermail] = useState('');
const [user_pass, setuserpass] = useState('');

  const classes = useStyles();

//   console.log(typeof classes.root);


  const isVarifiedUser=async (usermail, password)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username": usermail,
          "password":password
        })
      };
      
      
      await fetch("http://localhost:8000/api-token-auth", requestOptions)
        .then(async response => 
          {
            // response.json()
            console.log(response);
            if (response.ok) {  
              response.json()
              .then(data=>{
                console.log("response:",data);
                localStorage.setItem("token", data.token);
                console.log("token from localstorage:",localStorage.getItem("token"));
                
                window.location.href="\\";
              })
              
            }
            else
            {
              throw new Error('Check email and password') 
            }
          })
        .catch(error =>
            {
              // window.location.reload(false);
              console.log( error)
              alert(error)

            });
  };


  const handelLogin = async (event)=>{
      event.preventDefault();
      if(await isVarifiedUser(user_mail,user_pass)){
        authService.doLogIn(user_mail);
        setusermail("");
        setuserpass("");
        // props.history.push("/home");

      }
  };

  const handelLogout = async (event)=>{
    event.preventDefault();
    
};
  return (
    <Grid container component="main" className={classes.root}>
         <Header/>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid
        className={classes.size}
        item
        xs={12}
        sm={8}
        md={5}
        // component={Paper}
        elevation={1}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            {/* <TextField
            onChange={(event)=>handelAccount("username",event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            /> */}

            <TextField
            onChange={(event)=>setusermail(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
            <TextField
            onChange={(event)=>setuserpass(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {handelLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
