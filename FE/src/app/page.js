import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from '@mui/material'
import getCountries from "./actions/getCountries";
import CountryList from "@/components/List";


export default async function Home() {
  const countries = await getCountries();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Country List
          </Typography>
        </Toolbar>
      </AppBar>
      <CountryList countries={countries}/>
    </Box>
  )
}