const sequelize = require("../sequelize/sequelize");
const Sequelize = require("sequelize");

const Editorial = sequelize.define("editoriales", {
  nombre: Sequelize.TEXT,
  email: Sequelize.TEXT,
});

module.exports = Editorial;
