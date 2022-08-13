import pool from "../../database/keys";

function eliminar(id) {
  pool.query("DELETE FROM labor WHERE id=$1", [id], (error, resultado) => {
    if (error) return console.error("Error executing query", error.stack);
    return resultado;
  });
}

module.exports = eliminar;
