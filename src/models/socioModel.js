const sequelize = require("../sequelize/sequelize");
const Sequelize = require("sequelize");

const Socio = sequelize.define("socios", {
  nombre: Sequelize.TEXT,
  dni: Sequelize.TEXT,
  telefono: Sequelize.TEXT,
});

module.exports = Socio;
