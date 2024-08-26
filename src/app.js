import express from "express";
const app = express();

import bodyParser from "body-parser";
import { router as schoolRouter} from "./router/router.js";


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


app.use(schoolRouter)



export { app }
















