// app/page.js
import getCountryInfo from "../../actions/getCountryInfo";
import CountryDetails from "@/components/CountryDetails";
import BorderCountries from "@/components/BorderCountries";
import PopulationChart from "@/components/PopulationChart";
import CountryNotFound from "@/components/CountryNotFound";
import { AppBar, Toolbar, Typography, Paper, Box, Link, Button } from '@mui/material';


export default async function Page({ params }) {
  const { countryCode } = params;
  const country = await getCountryInfo(countryCode);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Country Info
          </Typography>
        </Toolbar>
      </AppBar>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100%',
          padding: 2
        }}
      >
        <Paper 
          elevation={3} 
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 3, 
            borderRadius: 2, 
            width: '100%', 
            maxWidth: '1400px', 
            margin: 'auto',
            boxSizing: 'border-box',
            '@media (max-width:600px)': {
              maxWidth: '100%',
              margin: 0
            }
          }}
        >
          {country.error ? (
            <CountryNotFound error={country.error}/>
          ) : (
            <>
              <CountryDetails country={country} />
              <PopulationChart populationData={country.population} />
              <BorderCountries borders={country.borders} />
            </>
          )}
          <Link href={'/'}>
            <Button 
              variant="contained"
              sx={{ 
                marginY: 2, 
              }}
            >
              Go to country list
            </Button>
          </Link>
        </Paper>
      </Box>
      
    </>
  );
}
