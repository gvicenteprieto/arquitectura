const datos = [];
//en éste caso persistimos en memoria, pero podríamos usar una base de datos

async function recuperarTodos() {
  return datos;
}

/*acá  de daos interactuamos con la base de datos*/
async function guardar(dato) {
  datos.push(dato);
  return dato;
}

module.exports = { recuperarTodos, guardar };