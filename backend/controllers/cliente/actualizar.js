import pool from "../../database/keys";

async function actualizar(email, nombreUsuario, telefono) {
  try {
    await pool.query("UPDATE usuario SET email=$1, nombreUsuario = $2 WHERE telefono=$3", [
      email,
      nombreUsuario,
      telefono,
    ]);
    return{email,
      nombreUsuario,
      telefono,}
  } catch (error) {
    throw "Hubo un error";
  }
}

module.exports = actualizar;
