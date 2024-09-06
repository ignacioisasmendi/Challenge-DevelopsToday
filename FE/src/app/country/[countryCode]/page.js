// app/page.js
import getCountryInfo from "../../actions/getCountryInfo";
import CountryDetails from "@/components/CountryDetails";
import BorderCountries from "@/components/BorderCountries";
import PopulationChart from "@/components/PopulationChart";
import CountryNotFound from "@/components/CountryNotFound";
import { Paper, Box } from '@mui/material';

export default async function Page({ params }) {
  const { countryCode } = params;
  const country = await getCountryInfo(countryCode);
  

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        padding: 2
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
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
        {country ? (
          <>
            <CountryDetails country={country} />
            <PopulationChart populationData={country.population} />
            <BorderCountries borders={country.borders} />
          </>
        ) : (
          <CountryNotFound />
        )}
      </Paper>
    </Box>
  );
}
