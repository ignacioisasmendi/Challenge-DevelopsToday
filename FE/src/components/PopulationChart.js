'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

export default function PopulationChart({ populationData }) {
  
  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 4, borderRadius: 2, width: '100%', maxWidth: '1400px', margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Population Over Time
      </Typography>
      <Box 
        sx={{ 
          height: 400,
          '@media (max-width:600px)': {
              maxWidth: '100%',
              margin: 0
            }
          }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={populationData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
