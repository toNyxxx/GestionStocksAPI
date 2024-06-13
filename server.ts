import { ErrorHandler, reqDebug } from "./api/middlewares";
import routes from './api/resources';
import seq from "./db/db";
import { initModels } from "./db/models";

// Environnement
require('dotenv').config();

// Préfix utilisé pour l'accés à l'API (+ versioning)
const prefix = process.env.API_PREFIX;

// Initialisation ExpressJS
const express = require("express");
const app = express();

// Middleware(s) 
app.use(express.json());
// app.use((req) => parseObject(req.query)); 
app.use(reqDebug); // Debugging request in development environment

// Default route redirection
app.get("/", (_req, res) => res.status(301).redirect(`${prefix}`));

// Resources route(s)
app.use(`${prefix}`, routes);
// app.use(departmentController.fromRoot(), departmentController.getRouter());
// app.use(`${prefix}/groups`, groupsRouter);
// app.use(`${prefix}/equipments`, equipsRouter);
// app.use(`${prefix}/manufacturers`, manufacturersRouter);

// Error handling
app.use(ErrorHandler);

async function run() {
  // Initialisation de la DB
	initModels(seq);

  // Démarrage de l'application
	app.listen(5000, () => {
		console.log("server is listening on port 5000");
	});
}

run();
