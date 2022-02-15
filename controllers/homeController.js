/* Los controladores tienen la logica de negocio */

const homesModels = require("../models/homesModel");

const createHome = (req, res) => {
  // res.send({ message: "Home creado" });

  homesModels.create(req.body).then((row) => {
    res.status(201).send(row);
  })
  .catch((err) => {
    res.status(400).send(err.message);
  })
};

module.exports = {
  createHome,
};
