import pool from "../../database/keys";

async function read(id) {
  try {
    await pool.query("SELECT * FROM worker WHERE id=$1", [id]);
  } catch (error) {
    throw "There was a problem";
  }
}

module.exports = read;
