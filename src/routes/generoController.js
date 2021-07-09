var express = require("express");
var router = express.Router();
const Genero = require("../models/generoModel");

/**
 * Un genero
 * @typedef {object} Genero
 * @property {string} genero.required - Genero

 */

/**
 * GET /genero/
 * @summary Endpoint para obtener todos los generos
 * @returns {object[]} 200 - success response
 */
router.get("/", function (req, res, next) {
  Genero.findAll().then((generos) => res.json(generos));
});

module.exports = router;
