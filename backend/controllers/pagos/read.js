import pool from "../../database/keys";

async function read(registro){
    try {
        await pool.query("SELECT * FROM pagos WHERE registro=$1",[registro]);
    } catch (error) {
        throw "Error";
    }
}

module.exports = read;