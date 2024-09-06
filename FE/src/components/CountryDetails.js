'use client';
import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function CountryDetails({ country }) {
  // Destructure the selectedCountry prop to get country details
  const { name, flagUrl } = country;
  console.log(country);

  return (
    <Paper 
      elevation={3} 
      sx={{
        display: 'flex', 
        alignItems: 'center', 
        padding: 2,
        borderRadius: '10px', 
        maxWidth: 300,
        margin: '20px auto',
      }}
    >
      <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
        {name}
      </Typography>

      <Box
        component="img"
        src={flagUrl} 
        alt={`${name} Flag`}
        sx={{
          height: 60, 
          width: 100, 
          objectFit: 'contain', 
          marginLeft: 2, 
          borderRadius: '5px',
        }}
      />
    </Paper>
  );
}
