require("dotenv").config();
const express = require("express");
// importar las rutas de mi vista de home
const homeRoutes = require("./routes/homeRoutes");

const app = express();

/* Middleware (opcional) */
app.use(express.urlencoded({ extended: true })); // para protocolos diferentes a http o https
app.use(express.json());

/* Rutas */
app.use("/api/v1", homeRoutes);

/* Iniciar el servidor */
app.listen(8000, () => {
  console.log("Servidor iniciado en puerto 8000");
});
