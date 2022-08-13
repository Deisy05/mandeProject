import pool from "../../database/keys";

async function crear(id_labor, id_trabajador, descripcion, precio){
    try {
        await pool.query("INSERT INTO servicio (id_labor, id_trabajador, descripcion, precio) VALUES ($1, $2, $3, $4)"
        ,[id_labor, id_trabajador, descripcion, precio]);
        return {id_labor, id_trabajador, descripcion, precio};
    } catch (error) {
        throw "Error"
    }
}

module.exports = crear;