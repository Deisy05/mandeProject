import pool from "../../database/keys";

async function authentication(email, password) {
  try {
    const worker = await (
      await pool.query(
        "SELECT * FROM worker WHERE email=$1 AND password=$2",
        [email, password]
      )
    ).rows;
    if (worker.lenght === 1) {
      return true;
    }
    throw "user not found";
  } catch (error) {
    throw "There was a problem with the database";
  }
}

module.exports = authentication; //Export object
