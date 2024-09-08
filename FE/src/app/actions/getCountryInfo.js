import base64 from 'base-64';

export default async function getCountryInfo(countryCode) {
  try {
    const credentials = `${process.env.NEXT_BASIC_USERNAME}:${process.env.NEXT_BASIC_PASSWORD}`;
    const encodedCredentials = base64.encode(credentials);

    const response = await fetch(
      `${process.env.SERVER_URL}/country/${countryCode}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );

    const country = await response.json();
    return country;
  } catch (error) {
    console.error('Error fetching country info:', error);
    return null;
  }
}
