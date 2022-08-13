import pool from "../../database/keys";

async function update(name,id) {
  try {
    await pool.query("UPDATE labor SET name=$1 WHERE id=$2", [name, id]);  
  } catch (error) {
    throw "something is wrong"
  }
}

module.exports = update;
