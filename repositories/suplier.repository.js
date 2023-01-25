import { connect } from "../database/db.postgres.js";

async function insertSuplier(suplier) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO supliers (name, cnpj, phone, email, address) VALUES($1, $2, $3, $4, $5) RETURNING *"
        const values = [suplier.name, suplier.cnpj, suplier.phone, suplier.email, suplier.address];

        const resultado = await conn.query(sql, values);
        //Retornando novo registro pro supliere 
        return resultado.rows[0];

    } catch (error) {
        throw error;
    } finally {
        //encerrando a conexão
        conn.release();
    }
}

async function getAllSupliers() {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM supliers");
        return resultado.rows;
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function getSuplierById(id) {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM supliers WHERE suplier_id = $1", [id]);
        //retorna o primeiro elemento da lista
        return resultado.rows[0];
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function updateSuplier(suplier) {
    const conn = await connect();
    try {
        const sql = "UPDATE supliers SET name = $1, cnpj = $2, phone = $3, email = $4, address = $5 WHERE suplier_id = $6";
        const values = [suplier.name, suplier.cnpj, suplier.phone, suplier.email, suplier.address, suplier.suplier_id];

        const resultado = await conn.query(sql, values);
        return resultado.rows[0];

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function deleteSuplier(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM supliers WHERE suplier_id = $1", [id]);

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

export {
    insertSuplier,
    getAllSupliers,
    getSuplierById,
    updateSuplier,
    deleteSuplier
}