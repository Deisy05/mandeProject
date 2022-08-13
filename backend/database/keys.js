import { Pool } from "pg";

const pool = new Pool({
  host: "database",
  port: "5432",
  user: "mande_dev",
  password: "pg123",
  database: "mande",
});

module.exports = pool;
