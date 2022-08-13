import pool from "../../database/keys";

async function create(name) {
  console.log(name)
  try {
    await pool.query("INSERT INTO labor (name) VALUES ($1)", [
      name, 
    ]);
    return {
      name,
    };
    console.log(name);
  } catch (error) {
    throw "There was a problem with the database";
  }
}

module.exports = create;
