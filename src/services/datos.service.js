/* la capa de servicios tiene un función y un método, tmb hay lógica */

/* los valores que retornamos los recibe el controller */
const { recuperarTodos, guardar } = require("../daos/datos.dao");

async function obtenerDatos() {
  return await recuperarTodos();
}

async function crearDato(dato) {
  //tmb hay lógica
  dato.added = Date.now();
  await guardar(dato);
  //el valor retornado lo tomará el controller
  return dato;
}

module.exports = { obtenerDatos, crearDato };