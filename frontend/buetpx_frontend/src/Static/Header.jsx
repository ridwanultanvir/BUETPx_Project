import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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

const pages = ['Discover', 'Quest'];
const usermenu = ['Profile', 'Account Settings', 'Logout'];

function Header () {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <div>
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
              {pages.map((page) => (
                <NavLink className="nav-link" to={`/${page}`}>
                <MenuItem key={page} 
                // onClick="\"{...page}
                
                >
                  
                  <Typography textAlign="center" >{page}</Typography>
                  
                </MenuItem>
                </NavLink>
              ))}

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
                  <NavLink className="nav-link" to={`/${page}`}>
                  <Button
                    key={page}
                
                    sx={{ my: 2, color: 'white', display: 'block',
                    fontSize:14,
                    fontWeight:'bold' }}
                  >
                    
                  {page}
                  
                  </Button>
                  </NavLink>
                 
                  
                 
              ))}
              </Box>

              
            {/* </Grid> */}
            {/* <Grid item xs={2}>
            
            </Grid> */}
          
          {/* </Grid> */}



{/* user menu after click of pp */}
          
          <Box sx={{ flexGrow: 0 }}>
          <NavLink className="nav-link" to="/putphoto">
              <Button 
                    // onClick={} 
                  sx={{
                    color:'white',
                    fontSize:14,
                    fontWeight:'bold'
                  }}
                    >
                      Upload
                  <FileUploadOutlinedIcon size='large' />
              </Button>
              </NavLink>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
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
              {usermenu.map((setting) => (
                <NavLink className="nav-link"  to="/">
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}
export default Header;
