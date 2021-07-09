var express = require("express");
var router = express.Router();
const Socio = require("../models/socioModel");
const {
  crearSocio,
  actualizarSocio,
  eliminarSocio,
} = require("../services/socioService");

/**
 * Un socio
 * @typedef {object} Socio
 * @property {string} nombre.required - Nombre
 * @property {string} dni.required - DNI
 * @property {string} telefono.required - Telefono
 */

/**
 * GET /socios/
 * @summary Endpoint para obtener todos los socios
 * @returns {array<Socio>} 200 - success response
 * @returns {object} 500 - error response
 */
router.get("/", async (req, res) => {
  try {
    const socios = await Socio.findAll();
    res.status(200).json(socios);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * POST /socios/
 * @summary Endpoint para obtener crear un nuevo socio
 * @param {Socio} request.body.required - Socio info
 * @returns {Socio} 200 - success response
 * @returns {object} 500 - error response
 */
router.post("/", async (req, res) => {
  try {
    const socio = await crearSocio(req.body);
    res.status(201).json(socio);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * PUT /socios/:id
 * @summary Endpoint para modificar un nuevo socio
 * @param  {number} id.query.required - Socio id
 * @param {Socio} request.body.required - Socio info
 * @returns {Socio} 200 - success response
 * @returns {object} 500 - error response
 */
router.put("/:id", async (req, res) => {
  try {
    const socio = await actualizarSocio({ id: req.params.id, ...req.body });
    res.status(200).json(socio);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * DELETE /socios/:id
 * @summary Endpoint para eliminar un socio
 * @param {number} id.query.required - Socio id
 * @returns {object} 200 - success response
 * @returns {object} 500 - error response
 */
router.delete("/:id", async (req, res) => {
  try {
    await eliminarSocio(req.params.id);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ success: 500 });
  }
});

module.exports = router;
