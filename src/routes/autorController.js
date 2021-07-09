var express = require("express");
var router = express.Router();
const Autor = require("../models/autorModel");

/**
 * Un autor
 * @typedef {object} Autor
 * @property {string} nombre.required - Nombre
 * @property {string} nacionalidad.required - Nacionalidad
 */

/**
 * GET /autor/
 * @summary Endpoint para obtener todos los autores
 * @returns {array<Autor>} 200 - success response
 */
router.get("/", function (req, res, next) {
  Autor.findAll().then((autores) => res.json(autores));
});

module.exports = router;
