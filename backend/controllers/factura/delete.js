import pool from "../../database/keys";

async function eliminate(id){
    try {
    pool.query("DELETE FROM payroll WHERE id=$1", [id], (err, result) => {
        if (err) return console.error("Error executing query", err.stack);
        return result;
      });
    } catch (error) {
        throw "Error"
    }
}

module.exports = eliminate;