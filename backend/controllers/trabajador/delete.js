import pool from "../../database/keys";

async function permanent_delete(id) {
  try {
    pool.query("DELETE FROM worker WHERE id=$1", [id],(err, result) => {
      if (err) return console.error("Error executing query", err.stack);
      return result;
    });

  } catch (error) {
    throw "There was a problem with the elimination";
  }
}

module.exports = permanent_delete;

