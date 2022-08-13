import pool from "../../database/keys";

async function create(name, lastName, address, username, email, password, profile_image, availability) {
  try {
    await pool.query(
      "INSERT INTO worker (name, lastName, address, username, email, password, profile_image, availability) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [name, lastName, address, username, email, password, profile_image, availability]
    );
      return {name, lastName, address, username, email, password, profile_image, availability};
  } catch (error) {
    throw "There was a problem with the database";
  }
}

module.exports = create;
