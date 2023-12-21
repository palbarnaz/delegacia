import express from "express";
import { CrimeCrontroller } from "./controllers/crime.controller";
import { CriminosoController } from "./controllers/criminoso.controller";


const app = express();
app.use(express.json());

const criminosoController = new CriminosoController();
const crimeController = new CrimeCrontroller();


app.post("/criminoso", criminosoController.cadastrarCriminoso)
app.post("/crime/:id", crimeController.cadastrarCrime)


app.listen(8080, () => {
  console.log("API is running in port 8080.");
});
