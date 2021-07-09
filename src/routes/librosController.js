var express = require("express");
var router = express.Router();
const {
  crearLibro,
  actualizarLibro,
  eliminarLibro,
  obtenerLibros,
} = require("../services/libroService");

/**
 * Un libro
 * @typedef {object} Libro
 * @property {string} titulo.required - Titulo
 * @property {string} isbn.required - ISBN
 * @property {number} autorId.required - Autor Id
 * @property {number} generoId.required - Genero Id
 * @property {number} editorialId.required - Editorial Id
 */

/**
 * GET /libros/
 * @summary Endpoint para obtener todos los libros
 * @returns {array<Libro>} 200 - success response
 * @returns {object} 500 - error response
 */
router.get("/", async (req, res) => {
  try {
    const libros = await obtenerLibros();
    res.status(200).json(libros);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * POST /libros/
 * @summary Endpoint para obtener crear un nuevo libro
 * @param {Libro} request.body.required - Libro info
 * @returns {Libro} 200 - success response
 * @returns {object} 500 - error response
 */
router.post("/", async (req, res) => {
  try {
    const libro = await crearLibro(req.body);
    res.status(201).json(libro);
  } catch (e) {
    res.status(500).json(e);
  }
});

/**
 * PUT /libros/:id
 * @summary Endpoint para modificar un nuevo libro
 * @param  {number} id.query.required - Libro id
 * @param {Libro} request.body.required - Libro info
 * @returns {Libro} 200 - success response
 * @returns {object} 500 - error response
 */
router.put("/:id", async (req, res) => {
  try {
    const libro = await actualizarLibro({ id: req.params.id, ...req.body });
    res.status(200).json(libro);
  } catch (e) {
    res.status(500).catch(e);
  }
});

/**
 * DELETE /libros/:id
 * @summary Endpoint para eliminar un libro
 * @param {number} id.query.required - Libro id
 * @returns {object} 200 - success response
 * @returns {object} 500 - error response
 */
router.delete("/:id", async (req, res) => {
  try {
    await eliminarLibro(req.params);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
