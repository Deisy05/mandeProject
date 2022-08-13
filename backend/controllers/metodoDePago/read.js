import pool from "../../database/keys";

async function read(card_number){
    try {
        await pool.query("SELECT * FROM payment_method WHERE card_number=$1",[card_number]);
    } catch (error) {
        throw "Error"
    }
}

module.exports = read;