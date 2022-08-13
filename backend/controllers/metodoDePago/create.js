import pool from "../../database/keys";

async function create(card_number, cvv, expiration_date, name_titular, phone){
    try {
        await pool.query("INSERT INTO payment_method (card_number, cvv, expiration_date, name_titular, phone) VALUES ($1, $2, $3, $4, $5)"
        ,[card_number, cvv, expiration_date, name_titular, phone]);
        return{
            card_number, 
            cvv, 
            expiration_date, 
            name_titular, 
            phone
        };
    } catch (error) {
        throw "Error"
    }

}


export default create;