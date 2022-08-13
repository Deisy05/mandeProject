import pool from "../../database/keys";

async function read(pay_registration){
    try {
        await pool.query("SELECT * FROM pay WHERE pay_registration=$1",[pay_registration]);
    } catch (error) {
        throw "Error";
    }
}

module.exports = read;