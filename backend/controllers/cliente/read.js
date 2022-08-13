import pool from "../../database/keys";

async function read(phone) {
  try {
    await pool.query("SELECT * FROM client WHERE phone=$1", [phone]);
  } catch (error) {
    throw "client not found";
  }
}

module.exports = read;
