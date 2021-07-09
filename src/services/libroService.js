const Libro = require("../models/libroModel");

const obtenerLibros = async () => {
  const libros = await Libro.findAll({ include: { all: true } });
  return libros;
};

const crearLibro = async ({ titulo, isbn, autorId, generoId, editorialId }) => {
  const libro = await Libro.create({
    titulo: titulo,
    isbn: isbn,
    autorId: autorId,
    generoId: generoId,
    editorialId: editorialId,
  });

  return libro;
};

const actualizarLibro = async ({
  id,
  titulo,
  isbn,
  autorId,
  generoId,
  editorialId,
}) => {
  let libro = await Libro.findOne({ where: { id: id } });

  libro.titulo = titulo;
  libro.isbn = isbn;
  libro.autorId = autorId;
  libro.generoId = generoId;
  libro.editorialId = editorialId;

  await libro.save();

  return libro;
};

const eliminarLibro = async ({ id }) => {
  let libro = await Libro.findOne({ where: { id: id } });
  if (libro) {
    await libro.destroy();
  }
};

module.exports = { obtenerLibros, crearLibro, actualizarLibro, eliminarLibro };
