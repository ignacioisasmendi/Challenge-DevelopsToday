
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
  try {
    const countryCode = req.params.countryCode;
    const countryInfo = await thirdParty.getCountryInfo(countryCode);

    if (!countryInfo) {
      return res.status(404).json({
        error: {
          message: `Information for country code '${countryCode}' not found.`,
          code: "COUNTRY_NOT_FOUND",
        },
      });
    }

    return res.status(200).json(countryInfo);
  } catch (error) {
    console.error("Error fetching country information:", error);
    return res.status(500).json({
      error: {
        message: "Server error. Please try again later.",
        code: "SERVER_ERROR",
      },
    });
  }
};


export default {
  allCountries,
  countryInfo  
};