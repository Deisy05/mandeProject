import pool from "../../database/keys";

async function read(precio){
    try {
        await pool.query("SELECT * FROM servicio WHERE precio=$1S",[precio]);
    } catch (error) {
        throw "Error"
    }
}

module.exports = read;