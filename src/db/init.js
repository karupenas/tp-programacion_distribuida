const sequelize = require("../sequelize/sequelize");
const Sequelize = require("sequelize");

const Autor = require("../models/autorModel");
const Editorial = require("../models/editorialModel");
const Genero = require("../models/generoModel");
const Socio = require("../models/socioModel");

const generarBD = () => {
  sequelize.sync({ force: true }).then(() => {
    Autor.bulkCreate([
      { nombre: "Gabriel Garcia Marquez", nacionalidad: "Colombiana" },
      { nombre: "Rosa Montero", nacionalidad: "Española" },
      { nombre: "Julio Cortazar", nacionalidad: "Argentina" },
      { nombre: "Emily Brontë ", nacionalidad: "Britanica" },
    ]);
  });

  sequelize.sync({ force: true }).then(() => {
    Editorial.bulkCreate([
      { nombre: "Alfaguara", email: "alfaguara@gmail.com" },
      { nombre: "Planeta", email: "planeta@gmail.com" },
      { nombre: "Debolsillo", email: "debolsillo@hotmail.com" },
      { nombre: "Salamandra", email: "salamandra@hotmail.com" },
    ]);
  });

  sequelize.sync({ force: true }).then(() => {
    Genero.bulkCreate([
      { genero: "Clasico" },
      { genero: "Dramatico" },
      { genero: "Ciencia Ficcion" },
    ]);
  });

  sequelize.sync({ force: true }).then(() => {
    Socio.bulkCreate([
      { nombre: "Lautaro Guanco", dni: "53473888", telefono: "42324422" },
      { nombre: "kiara Devanna", dni: "49862555", telefono: "34561299" },
      { nombre: "karin Peña", dni: "46782000", telefono: "47927655" },
      { nombre: "katia Peña", dni: "34568000", telefono: "42017655" },
    ]);
  });
};

module.exports = generarBD;
