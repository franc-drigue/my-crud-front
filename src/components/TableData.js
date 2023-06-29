import React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const TableData = () => {

 const Data = [
     {
     "id": 1,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 2,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 3,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 3,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 4,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 5,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 6,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 7,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 8,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 9,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     },
     {
     "id": 10,
     "first_name": "Ronnie",
     "last_name": "Klagge",
     "email": "rklagge0@sbwire.com"
     }

];



    return(
       <Paper sx={{ width: '95%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 580 }} >
                 <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                         <TableRow>
                              <TableCell sx={{fontWeight:'bold'}}>id</TableCell>
                              <TableCell sx={{fontWeight:'bold'}}>Nome</TableCell>
                              <TableCell sx={{fontWeight:'bold'}}>Sobrenome</TableCell>
                              <TableCell align="center" sx={{fontWeight:'bold'}}>email</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {Data.map((row) => (
                              <TableRow 
                              key={row.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                              <TableCell>{row.id}</TableCell>
                              <TableCell>{row.first_name}</TableCell>
                              <TableCell>{row.last_name}</TableCell>
                              <TableCell align="center">{row.email}</TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
                 </Table>
            </TableContainer>
       </Paper>
    );

};

export default TableData;
