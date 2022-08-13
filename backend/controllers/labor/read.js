import pool from "../../database/keys";

async function read(id) {
  await pool.query("SELECT * FROM labor WHERE id=$1", [id], (err, result) => {
    if (err) return console.error("Error executing query", err.stack);
    return result;
  });
}
module.exports = read;
