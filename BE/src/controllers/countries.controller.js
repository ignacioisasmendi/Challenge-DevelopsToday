
import thirdParty from '../services/thirdParty.service.js';

const allCountries = async (req, res) => {
  try {
    const countries = await thirdParty.getAllCountries();
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};


const countryInfo = async (req, res) => {
    try{
      const countryCode = req.params.countryCode;
      console.log("Buscando info..");
      const countryInfo = await thirdParty.getCountryInfo(countryCode);
      console.log("Info encontrada: ", countryInfo);
      return res.status(200).json(countryInfo);
    }
    catch(error){
      console.error("Error al cargar el resultado de la búsqueda en la base de datos: ");
      return res.status(500).json({ error: "Server error" });
    }
}

export default {
  allCountries,
  countryInfo  
};