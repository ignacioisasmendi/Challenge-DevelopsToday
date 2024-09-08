import fetch from 'node-fetch';

const getAllCountries = async () => {
  try {
    const result = await fetch(
      'https://date.nager.at/api/v3/AvailableCountries'
    );
    const countries = await result.json();
    return countries;
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching countries' });
  }
};

const getCountryInfo = async (countryCode) => {
  const borderList = await getBorders(countryCode);
  const country = await getFlag(countryCode);
  if (!country) {
    return null;
  }
  const population = await getPopulation(country.iso3);

  const countryDetails = {
    name: country.name,
    flagUrl: country.flag,
    borders: borderList,
    population: population,
  };

  return countryDetails;
};

const getPopulation = async (countryCode) => {
  const populationResponse = await fetch(
    `https://countriesnow.space/api/v0.1/countries/population`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iso3: countryCode }),
    }
  );

  if (!populationResponse.ok) {
    if (populationResponse.status === 404) {
      return null;
    } else {
      throw new Error(
        `Failed to fetch borders for country code ${countryCode}. Status: ${populationResponse.status}`
      );
    }
  }

  const country = await populationResponse.json();
  return country.data.populationCounts;
};

const getFlag = async (countryCode) => {
  const flagResponse = await fetch(
    `https://countriesnow.space/api/v0.1/countries/flag/images`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iso2: countryCode }),
    }
  );

  if (!flagResponse.ok) {
    if (flagResponse.status === 404) {
      return null;
    } else {
      throw new Error(
        `Failed to fetch borders for country code ${countryCode}. Status: ${flagResponse.status}`
      );
    }
  }

  const country = await flagResponse.json();
  return country.data;
};

const getBorders = async (countryCode) => {
  const borderResponse = await fetch(
    `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
  );

  if (!borderResponse.ok) {
    if (borderResponse.status === 404) {
      return null;
    } else {
      throw new Error(
        `Failed to fetch borders for country code ${countryCode}. Status: ${borderResponse.status}`
      );
    }
  }

  const borderCountries = await borderResponse.json();
  return borderCountries.borders;
};

export default {
  getAllCountries,
  getCountryInfo,
};
