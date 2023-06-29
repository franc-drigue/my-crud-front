import React, { children, useState } from "react";
import { AppBar, Button, Typography, Toolbar, IconButton, Menu, MenuItem,} from "@mui/material";
import {createTheme, ThemeProvider,} from "@mui/material";
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaUserCircle} from 'react-icons/fa';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonIcon from '@mui/icons-material/Person';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';




const Layout =({children})=>{

const [drawer, setDrawer] = useState(false);
const [profile, setProfile] = React.useState(null);

const history = useHistory();

const icons = [PersonIcon, PersonAddIcon, RequestQuoteIcon, SettingsIcon];

const openDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
    setDrawer({ ...drawer, [anchor]: open });
};

const iconProfile = (event) => {
  setProfile(event.currentTarget);
};

const handleClose = () => {
  setProfile(false)
}

const navigateTo = (path) => {
  history.push(path);
  openDrawer(false); // Fechar o drawer após a navegação
};

const goHome =() => {
  history.push('/');
}


const list = (anchor) => (
  <Box
    role="presentation"
    onClick={openDrawer(anchor, false)}
    onKeyDown={openDrawer(anchor, false)}
  >
    <List> 
      {[
        { text: 'Clientes', path: '/customers' },
        { text: 'Cadastrar Clientes', path: '/customersRegister' },
        { text: 'Financeiro', path: '/finance' },
        { text: 'Configurações', path: '/settings' },
        ].map((item, index) => (
        <ListItem key={index} disablePadding sx={{
          color:'#757575'
        }}>
          <ListItemButton onClick={() => navigateTo(item.path)}>
            <ListItemIcon sx={{
              color:'#757575'
            }}>
            {React.createElement(icons[index % icons.length])}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    
  </Box>
);

return(

<div>
  <header>
      <>
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{
                height:'80px',
                background: 'linear-gradient(to bottom, #26c6da, #4dd0e1)'
              }}>
                
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton 
                    size="large" 
                    edge="start" 
                    color="inherit" 
                    aria-label="Menu" 
                    onClick={openDrawer(anchor, true)}>
                    <MenuIcon fontSize="large"/>
                  </IconButton>

                  <Typography variant="h6" component="div" >
                    Menu
                  </Typography>
                  
                  <Box sx={{ flexGrow: 1, textAlign: 'center', paddingRight:'35px'}}>
                    <IconButton
                    size="large"
                    aria-label="Home"
                    color="inherit"
                    onClick={goHome}>
                      <HomeIcon fontSize="large"/>
                    </IconButton>
                  </Box>

                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={iconProfile}
                    color="inherit"
                  >
                    <AccountCircle fontSize="large"/>
                  </IconButton>
                  
                  <Menu
                      id="menu-appbar"
                      anchorEl={profile}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      open={Boolean(profile)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} sx={{color:'#757575'}}>Logout</MenuItem>
                    </Menu>

                  <Drawer
                    anchor={anchor}
                    open={drawer[anchor]}
                    onClose={openDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
              </Toolbar>
        </AppBar>
      </>
  </header>
  <main>
    {children}
  </main>
  
  <footer>

  </footer>
</div>
);

};

export default Layout;

