const Socio = require("../models/socioModel");

const crearSocio = async ({ nombre, dni, telefono }) => {
  const socio = await Socio.create({
    nombre: nombre,
    dni: dni,
    telefono: telefono,
  });

  return socio;
};

const actualizarSocio = async ({ id, nombre, dni, telefono }) => {
  let socio = await Socio.findOne({ where: { id: id } });

  socio.nombre = nombre;
  socio.dni = dni;
  socio.telefono = telefono;

  await socio.save();

  return socio;
};

const eliminarSocio = async ({ id }) => {
  let socio = await Socio.findOne({ where: { id: id } });

  if (socio) {
    await socio.destroy();
  }
};

module.exports = { crearSocio, actualizarSocio, eliminarSocio };
