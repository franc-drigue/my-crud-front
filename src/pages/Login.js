import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, createTheme, ThemeProvider, Paper, Alert } from "@mui/material";
import { FiUser, FiLock } from "react-icons/fi";
import Image from '../assets/crud.png';
import {useHistory} from 'react-router-dom';
import axios from 'axios';



const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
 

  const history = useHistory();

  const handleLogin = () => {
  setAlertOpen(false);
  axios.post('http://localhost:5000/auth/login', { user, password })
    .then(response => {
      if (response.data === true) {
        onLogin();
        history.push('/');
      } else {
        setAlertOpen(true);
      }
    })
    .catch(error => {
      console.log('Erro ao fazer login:', error);
    });
};




  // Crie um tema personalizado com as cores primária e secundária personalizadas
  const theme = createTheme({
    palette: {
      primary: {
        main: '#26c6da', // Sua cor primária personalizada
      },
      secondary: {
        main: '#4dd0e1', // Sua cor secundária personalizada
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        display={"flex"}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper elevation={3} sx={{
            width:'300px',
            height:'350px'
          }}>
              <Grid container 
                display='flex' 
                direction='column'
                alignItems='center'
                spacing={2} >
                  
                <img src={Image} alt="Logo" style={{ width: "140px",height:'120px', margin:'20px', marginLeft:'40px'}} />
                <Grid item xs={12} sm={12} display="flex"  alignItems="center" >
                  <FiUser color="#bdbdbd" size={30} />
                  <TextField
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    sx={{
                      marginLeft: '3px',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} display="flex" alignItems="center">
                  <FiLock size={30} color="#bdbdbd"/>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      marginLeft: '3px',
                      
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}  display="flex" justifyContent="center" marginLeft={3}>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleLogin}
                        sx={{
                          width: '100px',
                          background: theme.palette.secondary.main, 
                          color:'#FFFFFF',
                          marginRight:'15px',
                          fontWeight:'bold'
                        }}
                      >
                        Login
                      </Button>
                </Grid>
              </Grid>
          </Paper>
        </Grid>
        <Alert severity="error" sx={{
            pd: 1,
            mt: 2,
            display: alertOpen ? "flex" : "none"
          }}>Usuário não encontrado</Alert>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
