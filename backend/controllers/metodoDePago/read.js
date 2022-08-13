import pool from "../../database/keys";

async function read(numeroT){
    try {
        await pool.query("SELECT * FROM metodoDePago WHERE numeroT=$1",[numeroT]);
    } catch (error) {
        throw "Error"
    }
}

module.exports = read;