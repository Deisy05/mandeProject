import pool from "../../database/keys";

async function crear(telefono, documento,  nombre, apellido, nombreUsuario, direccion, email, contraseña, imgperfil, img) {
  try {
    await pool.query(
      "INSERT INTO usuario (telefono, documento,  nombre, apellido, nombreUsuario, direccion, email, contraseña, imgperfil, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )",
      [telefono, documento,  nombre, apellido, nombreUsuario, direccion, email, contraseña, imgperfil, img]
    );
    return {
      telefono, documento,  nombre, apellido, nombreUsuario, direccion, email, contraseña, imgperfil, img
    };
  } catch (error) {
    throw "hay un problema con la base de datos";
  }
}

export default crear;
