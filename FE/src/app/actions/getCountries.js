import base64 from "base-64";

export default async function getCountries(){
  try{
    const tok = "restapi:restapi";
    const hash = base64.encode(tok);
    const Basic = "Basic " + hash;

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/countries`, {
      method: "GET",
      headers: {
        "Authorization": Basic,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const countries = await response.json();
    return countries;
  }catch(error){
    return { error: "Failed to fetch countries" };
  }
}