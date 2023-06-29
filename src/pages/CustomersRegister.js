import React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material";

const CustomersRegister = () => {

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

    return(

    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight:'86vh',
        padding:'20px'
          }}>
            <Box sx={{
                minHeight:'70vh',
                minWidth:'80vw',
                background: 'linear-gradient(to bottom, rgba(38, 198, 218, 0.1), rgba(77, 208, 225, 0.5))',
                borderRadius:'11px',
                boxShadow:'1px 5px 20px 2px rgba(0, 0, 0, 0.2)',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <ThemeProvider theme={theme}>
                        <Grid container display={'flex'} justifyContent={'center'} padding={5} spacing={2}
                        sx={{
                            marginBottom:'100px'
                        }}>
                            <Grid item xs={12} md={7}>
                            <TextField
                                    label='Nome'
                                    size='small'
                                    fullWidth
                                    variant='filled'
                                    />
                            </Grid>
                            <Grid item xs={12}  md={2}>
                            <TextField
                                    label='CPF'
                                    size='small'
                                    fullWidth
                                    variant='filled'
                                    />
                            </Grid>
                            <Grid item xs={12} md={7}>
                            <TextField
                                    label='Email'
                                    size='small'
                                    fullWidth
                                    variant='filled'
                                    />
                            </Grid>
                            <Grid item xs={12} md={2}>
                            <TextField
                                    label='Telefone'
                                    size='small'
                                    fullWidth
                                    variant='filled'
                                    />
                            </Grid>
                            <Grid item xs={12} md={9}>
                            <TextField
                                    label='Endereço'
                                    size='small'
                                    fullWidth
                                    variant='filled'
                                    />
                            </Grid>
                            <Grid container display={'flex'} justifyContent={'center'} 
                            sx={{
                                marginTop:'20px'
                            }}>
                                <Button variant="contained" sx={{color:'#FFFFFF', fontWeight:'bold'}}>
                                    Cadastrar
                                </Button>
                            </Grid>
                        </Grid>
                </ThemeProvider>
                
          </Box>
           
    </Box>
    );

};

export default CustomersRegister;