import pool from "../../database/keys";

async function create( pay_value, id_payroll, phone, card_number ){
    try {
        await pool.query("INSERT INTO pay (pay_value, id_payroll, phone, card_number) VALUES ($1, $2, $3, $4)",
        [pay_value, id_payroll, phone, card_number]);
        return{pay_value, id_payroll, phone, card_number};

    } catch (error) {
        throw "Error";
    }
}