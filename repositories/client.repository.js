import { connect } from "../database/db.postgres.js";

async function insertClient(client) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO clients (name, cpf, phone, email, adress) VALUES($1, $2, $3, $4, $5) RETURNING *"
        const values = [client.name, client.cpf, client.phone, client.email, client.adress];

        const resultado = await conn.query(sql, values);
        //Retornando novo registro pro cliente 
        return resultado.rows[0];

    } catch (error) {
        throw error;
    } finally {
        //encerrando a conexão
        conn.release();
    }
}

async function getAllClients() {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM clients");
        return resultado.rows;
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function getClientById(id) {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM clients WHERE client_id = $1", [id]);
        //retorna o primeiro elemento da lista
        return resultado.rows[0];
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function updateClient() {
    const conn = await connect();
    try {

    } catch (error) {
        throw error;

    } finally {

    }
}

async function deleteClient() {
    const conn = await connect();
    try {

    } catch (error) {
        throw error;

    } finally {

    }
}

export {
    insertClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient
}