const { Router } = require("express");

/* en ruteo importo los controllers:  */

const {
    getDatosController,
    postDatosController,
} = require("../controllers/datos.controller");

const routerDatos = new Router();

// routerDatos.get("/", getDatosController);
// routerDatos.post("/", postDatosController);

/* entre /datos y el controlador: irían los middleware, por ejemplo: isAuth */ 
routerDatos.get("/datos", getDatosController);
routerDatos.post("/datos", postDatosController);

module.exports = routerDatos;