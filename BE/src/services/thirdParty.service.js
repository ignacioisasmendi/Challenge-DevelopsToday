import fetch from 'node-fetch';

const getAllCountries = async () => {
  try {
    const result = await fetch("https://date.nager.at/api/v3/AvailableCountries");
    const countries = await result.json();
    return countries;
  } catch (error) {
    return res.status(500).json({ error: "Error fetching countries" });
  }
}

const getCountryInfo = async (countryCode) => {
  try {
      const borderList = await getBorders(countryCode);
      const country = await getFlag(countryCode);
      const population = await getPopulation(country.iso3);

      const countryDetails = {
        name:country.name,
        flagUrl: country.flag,
        borders: borderList,
        population: population
      };

      console.log(countryDetails);
      
      return countryDetails;
  }
  catch (error) {
    return res.status(500).json({ error: "Error fetching info for country" });
  }
}

const getPopulation = async (countryCode) => {
  try {
    const populationResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/population`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iso3: countryCode })
    });

    if (!populationResponse.ok) {
      throw new Error('Failed to fetch population data');
    }
    const country = await populationResponse.json();
    
    return country.data.populationCounts;

  }
  catch (error) {
    return res.status(500).json({ error: "Error fetching the population" });
  }
}

const getFlag = async (countryCode) => {
  try {
    console.log(countryCode);
    const flagResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iso2: countryCode })
    });

    if (!flagResponse.ok) {
      throw new Error('Failed to fetch flag images');
    }

    const country = await flagResponse.json();
    return country.data;

  }
  catch (error) {
    return res.status(500).json({ error: "Error fetching the flag" });
  }
}

const getBorders = async (countryCode) => {
  try {
      const borderResponse = await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
      if (!borderResponse.ok) {
        throw new Error('Failed to fetch border countries');
      }
      const borderCountries = await borderResponse.json();
      return borderCountries.borders;

  }
  catch (error) {
    return res.status(500).json({ error: "Error fetching borders" });
  }
}


export default {
  getAllCountries,
  getCountryInfo
};