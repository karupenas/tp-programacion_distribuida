const sequelize = require("../sequelize/sequelize");
const Sequelize = require("sequelize");
const Autor = require("./autorModel");
const Genero = require("./generoModel");
const Editorial = require("./editorialModel");

const Libro = sequelize.define("libros", {
  titulo: Sequelize.TEXT,
  isbn: Sequelize.INTEGER,
});

Libro.belongsTo(Autor, { foreignKey: "autorId", as: "autor" });
Libro.belongsTo(Genero, { foreignKey: "generoId", as: "genero" });
Libro.belongsTo(Editorial, { foreignKey: "editorialId", as: "editorial" });

module.exports = Libro;
