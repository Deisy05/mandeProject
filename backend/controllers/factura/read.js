import pool from "../../database/keys";

async function read(id){
    try {
        await pool.query("SELECT * FROM factura WHERE id=$1", [id])
    } catch (error) {
        throw "Error"
    }
}

module.exports = read;