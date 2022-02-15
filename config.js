// depende de la variable de entorno del sistema, usará la configuración de la base de datos

// tomar configuración del entorno de node, si no existe usamos development
const env = process.env.NODE_ENV || "development";

const knexFile = require("./knexfile");
const knex = require("knex")(knexFile[env]);

module.exports = knex;
