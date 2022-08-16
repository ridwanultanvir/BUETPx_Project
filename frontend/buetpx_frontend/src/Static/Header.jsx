import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Tab, Tabs} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import CardActionArea from '@mui/material/CardActionArea';
import {useState, useEffect} from "react";

const pages = ['Discover', 'Quest','Galleries'];
const usermenu = ['Profile', 'Account Settings', 'Logout'];


const Header = ()=> {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setuser] = React.useState();
    const [menu, setmenu] = React.useState();
    const [directUrl, setdirectUrl] = React.useState();
    // const [token, settoken] = React.useState(localStorage.getItem('token'));
    const token=localStorage.getItem('token');

  const handleOpenNavMenu = (event) => {
    console.log("clicked");
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log("clicked");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () =>
  {
    localStorage.removeItem('token')
  }

  const login = ()=>
  {

  }

   useEffect(()=>{
    if(directUrl){
      window.location.href=directUrl;
    }

   },[directUrl])

  // console.log(token)
  useEffect(() => {
    async function authentication()
    {
      if(token != null)
    {
      console.log(token)
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' ,
                    'Authorization': `Token ${token}` },
        };
      
        await fetch("http://localhost:8000/api/getuserdetails", requestOptions)
          .then(async response => 
            {
              // response.json()
              console.log(response);
              if (response.ok) {  
                const currentUser = await response.json()
                console.log('currentuser',currentUser)
                setuser(currentUser)
                
                console.log(user)
  
                setmenu(
                  <MenuItem key='logout'
                  onClick={logout}
                  
                  >
                    
                    <Typography textAlign="center" >Log Out</Typography>
                    
                  </MenuItem>
                )
      
                // window.location.href="\\";
              }
              else
              {
                setmenu(
                  <MenuItem key='login'
                  onClick={login}
                  
                  >
                    
                    <Typography textAlign="center" >Log In</Typography>
                    
                  </MenuItem>
                )
              }
            })
      
  
              
      
    }
    }

    authentication();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  

  return (
    <React.Fragment>
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CameraOutlinedIcon 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, mr: 1 
              }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'revert-layer',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BUETpx
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
{/* all pages linked to one of the menu items */}
              {/* {pages.map((page) => (
                <NavLink className="nav-link" to={`/${page}`}>
                <MenuItem key={page} 
                // onClick="\"{...page}
                
                >
                  
                  <Typography textAlign="center" >{page}</Typography>
                  
                </MenuItem>
                </NavLink>
              ))} */}

            </Menu>
          </Box>

          <CameraOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'revert-layer',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BUETpx
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}> */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             
              {pages.map((page) => (
                  // <NavLink className="nav-link" to={`/${page}`}>
                  <Button
                    key={page}
                
                    sx={{ my: 2, color: 'white', display: 'block',
                    fontSize:14,
                    fontWeight:'bold' }}
                    onClick={() => {setdirectUrl(`/${page}`)}}
                  >
                    
                  {page}
                  
                  </Button>
                  // </NavLink>
                 
                  
                 
              ))}
              </Box>

              
            {/* </Grid> */}
            {/* <Grid item xs={2}>
            
            </Grid> */}
          
          {/* </Grid> */}



{/* user menu after click of pp */}

            <Box sx={{paddingRight: '10px'}}>
            <Button 
                    onClick={()=>{setdirectUrl(`/upload`)}}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'revert-layer',
                      fontWeight: 700,
                      // letterSpacing: '.3rem',
                      color: 'white',
                      textDecoration: 'none',
                      
                    }}
                    >
                      Upload
                  <FileUploadOutlinedIcon size='large' />
              </Button>
            </Box>
          
          <Box sx={{ flexGrow: 0 }}>
          {/* <NavLink className="nav-link" to="/upload"> */}
             
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            
                <Tooltip title="Open usermenu">
                  <IconButton 
                    onClick={handleOpenUserMenu} 
                    sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>

                </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menu}
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </React.Fragment>
  )
}
export default Header;
