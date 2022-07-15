const express = require("express");
const routerDatos = require("./routes");

const app = express();
app.use(express.json());

// app.use("/api/datos", routerDatos);
app.use("/api", routerDatos);

// start server
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.error(`Error en servidor`, error));