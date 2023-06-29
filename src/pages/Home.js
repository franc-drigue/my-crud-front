import React from 'react';
import { Grid, Button, TextField, Box, colors,  } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TableData from '../components/TableData';



const Home = () => {

const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (_event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};;



const StyledAccordion = styled(Accordion)`
  background: linear-gradient(to bottom, #26c6da, #4dd0e1);
  color: #ffffff;
  font-size: 16px;
`;


    return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '87vh',
        padding:'10px'
      }}
    >
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight:'80vh',
        minWidth:'80vw',
        background: 'linear-gradient(to bottom, rgba(38, 198, 218, 0.1), rgba(77, 208, 225, 0.5))',
        borderRadius:'11px',
        boxShadow:'1px 5px 20px 2px rgba(0, 0, 0, 0.2)', 
    }}>
            <Grid container
            padding={2} 
            justifyContent="center" 
            alignItems="center" 
            spacing={2}
            sx={{
              marginBottom:'40vh'
            }}>
          
              <Grid item xs={10} md={5}>
                <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{
                  width: '100%',
                  
                }}
                >
                  <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />} 
                  aria-controls="panel1a-content" 
                  id="panel1a-header"
                  sx={{
                    height:'80px',
                    
                  }}>
                  
                    <Typography>Vendas</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TableData/>
                    </Typography>
                  </AccordionDetails>
                </StyledAccordion>
              </Grid>

              <Grid item xs={10} md={5}>
                <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                sx={{ 
                  width: '100%',
                
                }}>
                  <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />} 
                  aria-controls="panel2a-content" 
                  id="panel2a-header"
                  sx={{
                    height:'80px',
                    
                  }}>
                    <Typography>Saída</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TableData/>
                    </Typography>
                  </AccordionDetails>
                </StyledAccordion>
              </Grid>
            </Grid>
      </Box>
    
    </Box>
    );
};

export default Home;