'use client';
import * as React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import Link from 'next/link';

export default function BorderCountries({ borders }) {
  
  return (
    <Paper elevation={3} sx={{ padding: 2, maxHeight: 300, overflowY: 'auto', marginTop: 4, borderRadius: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection:'column', alignItems:'center', gap: 1 }}>
        <Typography variant="h6" gutterBottom>
          Border Countries
        </Typography>

        {borders.length === 0 ? (
          <Typography variant="body1">
            This country doesn't have borders.
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center', 
            }}
          >
            {borders.map((borderCountry) => (
              <Link key={borderCountry.countryCode} href={`/country/${borderCountry.countryCode}`}>
                <Button
                  variant="outlined"
                  sx={{ textTransform: 'capitalize' }}
                >
                  {borderCountry.commonName}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
