import pool from "../../database/keys";

async function crear(price, time, description, id_worker, rating, phone, id_labor){
    try {
        await pool.query("INSERT INTO factura (price, time, description, id_worker, rating, phone, id_labor) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        [price, time, description, id_worker, rating, phone, id_labor]);
        return {
            price, 
            time, 
            description, 
            id_worker, 
            raiting, 
            phone, 
            id_labor,
        }
    } catch (error) {
        throw "There was a problem with the service";
    }
}

export default crear;