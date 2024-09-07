'use client'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

const ScrollableList = styled(List)({
  maxHeight: 400,
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey',
  },
});

export default function CountryList({ countries }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <Card sx={{ width: '100%', maxWidth: 400, m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Countries
          </Typography>
          <ScrollableList>
            {countries.map((country) => (
              <ListItem key={country.name} divider>
                <Link href={`/country/${country.countryCode}`}>
                  <ListItemText primary={country.name} />
                </Link>
              </ListItem>
            ))}
          </ScrollableList>
        </CardContent>
      </Card>
    </Box>
  );
}
