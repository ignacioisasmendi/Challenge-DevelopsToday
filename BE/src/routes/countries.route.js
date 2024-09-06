import { Router } from "express";
const router = Router();
import countriesController from "../controllers/countries.controller.js";

router.get("/countries",countriesController.allCountries);
router.get("/country/:countryCode",countriesController.countryInfo);

export default router; 