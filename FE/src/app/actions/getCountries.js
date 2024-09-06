export default async function getCountries(){
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/countries`);
    const countries = await response.json();
    return countries;
  }catch(error){
    return res.status(500).json({ error: "Server error" });
  }
}