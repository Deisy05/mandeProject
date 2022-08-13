import pool from "../../database/keys";

function eliminate(id) {
  pool.query("DELETE FROM labor WHERE id=$1", [id], (err, result) => {
    if (err) return console.error("Error executing query", err.stack);
    return result;
  });
}

module.exports = eliminate;
