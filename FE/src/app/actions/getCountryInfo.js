export default async function getCountryInfo(countryCode){
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/country/${countryCode}`);

    if (!response.ok) {
      console.error('Failed to fetch country data:', response.statusText);
      return null; 
    }
    
    const country = await response.json();
    return country;
  }catch(error){
    console.error('Error fetching country info:', error);
    return null; 
  }
}