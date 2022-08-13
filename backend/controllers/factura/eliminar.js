import pool from "../../database/keys";

async function eliminar(id){
    try {
    pool.query("DELETE FROM factura WHERE id=$1", [id], (error, resultado) => {
        if (error) return console.error("Error de ejecución", error.stack);
        return result;
      });
    } catch (error) {
        throw "Error"
    }
}

module.exports = eliminar;