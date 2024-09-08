import base64 from 'base-64';

export default async function getCountries() {
  try {
    const credentials = `${process.env.NEXT_BASIC_USERNAME}:${process.env.NEXT_BASIC_PASSWORD}`;
    const encodedCredentials = base64.encode(credentials);

    const response = await fetch(
      `${process.env.SERVER_URL}/countries`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const countries = await response.json();
    return countries;
  } catch (error) {
    return { error: 'Failed to fetch countries' };
  }
}
