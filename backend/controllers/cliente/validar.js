import pool from "../../database/keys";


async function validar(nombreUsuario) {
  try {
    const cliente = await (
      await pool.query(
        "SELECT * FROM usuario WHERE nombreUsuario=$1 ",
        [nombreUsuario]
      )
    ).rows;

    if (cliente.lenght === 1) {
      return true;
    }
    throw "Usuario no encontrado";
  } catch (error) {
    throw "Hay un problema con la base de datos";
  }
}

module.exports = validar;
