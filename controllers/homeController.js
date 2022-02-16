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

const update = (req, res) => {
  homesModels
    .update(req.params.id, req.body)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

const deleteHome = (req, res) => {
  homesModels
    .delete(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

const softDelete = (req, res) => {
  homesModels
    .softDelete(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

module.exports = {
  createHome,
  getAllHomes,
  getHome,
  update,
  deleteHome,
  softDelete,
};
