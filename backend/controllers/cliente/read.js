import pool from "../../database/keys";

async function read(telefono) {
  try {
    await pool.query("SELECT * FROM usuario WHERE telefono=$1", [telefono]);
  } catch (error) {
    throw "no se encontrĂ³ el usuario";
  }
}

module.exports = read;
