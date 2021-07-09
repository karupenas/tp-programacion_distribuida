var express = require("express");
var router = express.Router();
const Prestamo = require("../models/prestamoModel");
const {
  crearPrestamo,
  actualizarPrestamo,
  eliminarPrestamo,
} = require("../services/prestamoService");

/**
 * Un prestamo
 * @typedef {object} Prestamo
 * @property {number} libroId.required - Libro id
 * @property {number} socioId.required - Socio id
 */

/**
 * GET /prestamo/
 * @summary Endpoint para obtener todos los prestamos
 * @returns {array<Prestamo>} 200 - success response
 * @returns {object} 500 - error response
 */
router.get("/", async (req, res) => {
  try {
    const prestamos = await Prestamo.findAll({ include: { all: true } });
    res.json(prestamos);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * POST /prestamo/
 * @summary Endpoint para crear un prestamo
 * @param {Prestamo} request.body.required - Prestamo info
 * @returns {Prestamo} 200 - success response
 * @returns {object} 500 - error response
 */
router.post("/", async (req, res) => {
  try {
    const prestamo = await crearPrestamo(req.body);
    res.status(201).json(prestamo);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * PUT /prestamo/:id
 * @summary Endpoint para modificar un prestamo
 * @param {number} id.query.required - Prestamo id
 * @param {Prestamo} request.body.required - Prestamo info
 * @returns {Prestamo} 200 - success response
 * @returns {object} 500 - error response
 */
router.put("/:id", async (req, res) => {
  try {
    const prestamo = await actualizarPrestamo({
      id: req.params.id,
      ...req.body,
    });
    res.status(200).json(prestamo);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * DELETE /prestamo/:id
 * @summary Endpoint para eliminar un prestamo
 * @param {number} id.query.required  - Prestamo id
 * @returns {Prestamo} 200 - success response
 * @returns {object} 500 - error response
 */
router.delete("/:id", async (req, res) => {
  try {
    await eliminarPrestamo(req.params);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
