import pool from "../../database/keys";

async function crear(precio, tiempo, descripcion, id_trabajador, rating, telefono, id_labor){
    try {
        await pool.query("INSERT INTO factura (price, time, description, id_worker, rating, phone, id_labor) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        [precio, tiempo, descripcion, id_trabajador, rating, telefono, id_labor]);
        return {precio, tiempo, descripcion, id_trabajador, rating, telefono, id_labor
        }
    } catch (error) {
        throw "Ha ocurrido un problema";
    }
}

export default crear;