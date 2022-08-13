import pool from "../../database/keys";

function eliminar(telefono) {
  pool.query("DELETE FROM usuario WHERE telefono=$1", [telefono], (error, resultado) => {
    if (error) return console.error("Error ", error.stack);
    return resultado;
  });
}

module.exports = eliminar;
