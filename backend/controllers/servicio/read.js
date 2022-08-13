import pool from "../../database/keys";

async function read(price){
    try {
        await pool.query("SELECT * FROM workerlabor WHERE price=$1S",[price]);
    } catch (error) {
        throw "Error"
    }
}

module.exports = read;