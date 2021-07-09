const Prestamo = require("../models/prestamoModel");

const crearPrestamo = async ({ libroId, socioId }) => {
  const prestamo = await Prestamo.create({
    libroId: libroId,
    socioId: socioId,
  });

  return prestamo;
};

const actualizarPrestamo = async ({ id, libroId, socioId }) => {
  let prestamo = await Prestamo.findOne({ where: { id: id } });

  prestamo.libroId = libroId;
  prestamo.socioId = socioId;

  await prestamo.save();

  return prestamo;
};

const eliminarPrestamo = async ({ id }) => {
  let prestamo = await Prestamo.findOne({ where: { id: id } });

  if (prestamo) {
    await prestamo.destroy();
  }
};

module.exports = { crearPrestamo, actualizarPrestamo, eliminarPrestamo };
