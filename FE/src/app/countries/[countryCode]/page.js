"use client"
import React from 'react'
import Link from 'next/link'
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Chip,
  Button,
  Card,
  CardHeader,
  CardContent
} from '@mui/material'
import { Public as PublicIcon } from '@mui/icons-material'
import PopulationChart from "@/components/PopulationChart";

// Mock data for demonstration purposes
const countryData = {
  name: 'France',
  flag: 'https://flagcdn.com/w320/fr.png',
  description: 'France is a country in Western Europe known for its rich history, culture, and cuisine.',
  borderCountries: ['Spain', 'Italy', 'Germany', 'Belgium', 'Switzerland'],
  populationData: [
    { year: 2000, value: 59000000 },
    { year: 2005, value: 61000000 },
    { year: 2010, value: 63000000 },
    { year: 2015, value: 64500000 },
    { year: 2020, value: 65300000 },
  ]
}

export default function CountryInfo() {
  
  const country = countryData
  console.log(countryData.populationData);
  

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#1976d2', display: 'flex', alignItems: 'center' }}>
          <PublicIcon sx={{ fontSize: 40, mr: 2 }} />
          Country Info
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <img src={country.flag} alt={`${country.name} flag`} style={{ width: 100, marginRight: 16 }} />
          <Typography variant="h4">{country.name}</Typography>
        </Box>
        
        
        <Card sx={{ mb: 4, backgroundColor: '#ffffff' }}>
          <CardHeader title="Border Countries" />
          <CardContent>
            <Grid container spacing={1}>
              {country.borderCountries.map((borderCountry) => (
                <Grid item key={borderCountry}>
                  <Chip
                    label={borderCountry}
                    to={`/country/${borderCountry.toLowerCase()}`}
                    clickable
                    color="primary"
                    variant="outlined"
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        
        <PopulationChart populationData={country.populationData} />
        
        <Button variant="contained" color="primary" to="/">
          Back to Countries List
        </Button>
      </Paper>
    </Container>
  )
}