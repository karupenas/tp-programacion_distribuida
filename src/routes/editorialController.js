var express = require("express");
var router = express.Router();
const Editorial = require("../models/editorialModel");

/**
 * Una editorial
 * @typedef {object} Editorial
 * @property {string} nombre.required - Nombre
 * @property {string} email.required - Email
 */

/**
 * GET /editorial/
 * @summary Endpoint para obtener todos las editoriales
 * @returns {array<Editorial>} 200 - success response
 */
router.get("/", function (req, res, next) {
  Editorial.findAll().then((editoriales) => res.json(editoriales));
});

module.exports = router;
