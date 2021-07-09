const sequelize = require("../sequelize/sequelize");
const Sequelize = require("sequelize");

const Genero = sequelize.define("generos", { genero: Sequelize.TEXT });

module.exports = Genero;
