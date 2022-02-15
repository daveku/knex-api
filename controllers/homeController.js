/* Los controladores tienen la logica de negocio */

const homesModels = require("../models/homesModel");

const createHome = (req, res) => {
  // res.send({ message: "Home creado" });

  homesModels
    .create(req.body)
    .then((row) => {
      res.status(201).send(row);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

const getAllHomes = (req, res) => {
  homesModels
    .getAll()
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

const getHome = (req, res) => {
  homesModels
    .getHome(req.params.id)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

module.exports = {
  createHome,
  getAllHomes,
  getHome,
};
