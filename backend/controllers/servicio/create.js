import pool from "../../database/keys";

async function create(id_labor, id_worker, description, price){
    try {
        await pool.query("INSERT INTO workerlabor(id_labor, id_worker, description, price) VALUES ($1, $2, $3, $4)"
        ,[id_labor, id_worker, description, price]);
        return {id_labor, id_worker, description, price};
    } catch (error) {
        throw "Error"
    }
}

module.exports = create;