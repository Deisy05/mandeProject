import pool from "../../database/keys";

async function update(email, username, id) {
  try {
    await pool.query("UPDATE worker SET email=$1, username = $2 WHERE id=$3", [
      email,
      username,
      id,
    ]);
  } catch (error) {
    throw "There was a problem";
  }
}

module.exports = update;
