import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

export default function BasicTable({countryList}) {
  return (
    <TableContainer component={Paper} elevation={2} sx={{ height: 800, width: '25%', margin:'2px', borderRadius:'10px'}}> 
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight="bold">
                Country name
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countryList.map((country) => (
            <TableRow
              key={country.countryCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/country/${country.countryCode}`}>{country.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

