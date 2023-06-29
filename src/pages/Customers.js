import React from "react";
import { TextField, Grid, Box, Paper } from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material";
import TableData from "../components/TableData";

const Customers = () => {

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

    return(
        <Box sx={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight:'90vh'
          }}>
            <ThemeProvider theme={theme}>
                <Grid container
                    padding={2}
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        marginBottom:'2vh'
                    }}>
                        <Grid item xs={9} sm={8} md={4}>
                            <TextField
                            label='Buscar'
                            size='small'
                            fullWidth
                            variant='filled'
                            />
                        </Grid>
                    </Grid>
            </ThemeProvider>
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
             <TableData/>
            </Box>
            
        </Box>
    );
};

export default Customers;
