
import express, { json } from "express";
import { config } from "dotenv";
import countries from "./src/routes/countries.route.js";
import auth from "./src/middlewares/auth.js";


const app = express();
config();

app.use;
app.use(auth)
app.use(json());
app.use("/api", countries);

const start = async () => {
  try {
    const port = process.env.PORT || 5005;
    app.listen(port, () => {
      console.log(`Listening at ${port}`);
    });
  } catch (error) {
    console.error("Error initiliazing the server:", error);
  }
};

start();
