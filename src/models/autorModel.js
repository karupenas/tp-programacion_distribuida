const sequelize = require("../sequelize/sequelize");
const Sequelize = require("sequelize");

const Autor = sequelize.define("autores", {
  nombre: Sequelize.TEXT,
  nacionalidad: Sequelize.TEXT,
});

module.exports = Autor;
