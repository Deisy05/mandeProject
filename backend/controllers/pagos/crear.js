import pool from "../../database/keys";

async function crear( valor, idPago, telefono, numeroT){
    try {
        await pool.query("INSERT INTO pagos ( valor, idPago, telefono, numeroT) VALUES ($1, $2, $3, $4)",
        [ valor, idPago, telefono, numeroT]);
        return{ valor, idPago, telefono, numeroT};

    } catch (error) {
        throw "Error";
    }
}