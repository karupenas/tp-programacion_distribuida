const sequelize = require("../sequelize/sequelize");
const Libro = require("./libroModel");
const Socio = require("./socioModel");

const Prestamo = sequelize.define("Prestamos", {});
Prestamo.belongsTo(Libro, { foreignKey: "libroId", as: "autor" });
Prestamo.belongsTo(Socio, { foreignKey: "socioId", as: "socio" });

module.exports = Prestamo;
