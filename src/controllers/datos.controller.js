/* acá en controllers recibimos el request y el response*/

/* la lógica de negocios de obtener datos, agregar datos, etc  la manejo en service, la importo desde allá*/
const { obtenerDatos, crearDato } = require("../services/datos.service");


/* el controller se encarga de responder datos*/

async function getDatosController(req, res) {
    const datos = await obtenerDatos();
    /* el controller se encarga de responder datos*/
    res.json(datos);
}

async function postDatosController(req, res) {
    /* acá podemos hacer validaciones, 
    si es undefined por ejemplo respondemos un 404, 500, etc */
    const dato = req.body;
    //el parámetro de crearDato es el dato que recibimos del
    await crearDato(dato);
    /* el controller se encarga de responder datos*/
    res.status(201).json(dato);
}

module.exports = { getDatosController, postDatosController };