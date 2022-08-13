import pool from "../../database/keys";

async function crear(numeroT, cvv, fechaEx, titular, telefono){
    try {
        await pool.query("INSERT INTO metodoDePago (numeroT, cvv, fechaEx, titular, telefono) VALUES ($1, $2, $3, $4, $5)"
        ,[numeroT, cvv, fechaEx, titular, telefono]);
        return{numeroT, cvv, fechaEx, titular, telefono
        };
    } catch (error) {
        throw "Error"
    }
}


export default crear;