// import React from 'react'
// import {AppBar,IconButton,Toolbar,Typography} from '@mui/material'
// import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
// import { makeStyles } from "@mui/styles";
// import Button from '@mui/material/Button';

// const useStyles = makeStyles(() => ({
//   typographyStyles: {
//     flex: 1
//   }
// }));

// function Header() {
//   const classes = useStyles();
//   return (
//     <AppBar position='static'>
//         <Toolbar>
//             <Typography className={classes.typographyStyles}>
//                 BUETpx
//             </Typography>
//             <IconButton ><AcUnitRoundedIcon /></IconButton>
//         </Toolbar>

//     </AppBar>
//   )
// }

// export default Header

// // npm install @mui/material @emotion/react @emotion/styled


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
// import AdbIcon from '@mui/icons-material/Adb';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const pages = ['Discover', 'Quest'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header () {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event) => {
    console.log("clicked");
    // setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
    console.log("clicked");
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
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

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                // onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <CameraOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
          </Typography> */}
          {/* <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}> */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
              
                  <Button
                    key={page}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                 
             
              ))}
              </Box>
              <Fab size="medium" color="white" aria-label="add" sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <AddIcon />
              </Fab>
            {/* </Grid> */}
            {/* <Grid item xs={2}>
            
            </Grid> */}
          
          {/* </Grid> */}

          
          <Box sx={{ flexGrow: 0 }}>
            
              
                
           
                <Tooltip title="Open settings">
                  <IconButton 
                    onClick={handleOpenUserMenu} 
                    sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
              </Tooltip>
              
            
          
{/*             
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              // anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
              
            </Menu> */}
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header;
