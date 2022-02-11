/* Los controladores tienen la logica de negocio */

const createHome = (req, res) => {
  res.send({ message: "Home creado }" });
};

module.exports = {
  createHome,
};
