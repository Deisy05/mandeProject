import pool from "../../database/keys";

async function crear(nombre) {
  console.log(nombre)
  try {
    await pool.query("INSERT INTO labor (nombre) VALUES ($1)", [
      nombre, 
    ]);
    return {
      nombre,
    };
    console.log(nombre);
  } catch (error) {
    throw " Ha ocurrido un error";
  }
}

module.exports = crear;
