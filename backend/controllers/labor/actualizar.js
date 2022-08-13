import pool from "../../database/keys";

async function actualizar(nombre,id) {
  try {
    await pool.query("UPDATE labor SET name=$1 WHERE id=$2", [nombre, id]);  
  } catch (error) {
    throw "something is wrong"
  }
}

module.exports = actualizar;
