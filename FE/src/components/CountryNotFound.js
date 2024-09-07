'use client';
import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NoCountryFound({error}) {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <Paper elevation={2} sx={{ padding: 2, borderRadius: '5px', marginTop: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          {error.message}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={handleBack}>
            Go Back
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
