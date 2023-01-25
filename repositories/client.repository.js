import { Client } from '../models/client.model.js';

async function insertClient(client) {
    try {
        return await Client.create(client);
    } catch (error) {
        throw error;
    }
}

async function getAllClients() {
    try {
        return await Client.findAll();
    } catch (error) {
        throw error;
    }
}

async function getClientById(id) {
    try {
        return await Client.findByPk(id);
    } catch (error) {
        throw error;
    }
}

async function updateClient(client) {
    try {
        const id = client.clientId;
        await Client.update(client, {
            where: {
                clientId: id
            }
        });
        return await getClientById(id);
    } catch (error) {
        throw error;
    }
    /* Código sem o Sequelize
    const conn = await connect();
    try {
        const sql = "UPDATE clients SET name = $1, cpf = $2, phone = $3, email = $4, adress = $5 WHERE client_id = $6";
        const values = [client.name, client.cpf, client.phone, client.email, client.adress, client.client_id];

        const resultado = await conn.query(sql, values);
        return resultado.rows[0];

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
    */
}

async function deleteClient(id) {
    try {
        await Client.destroy({
            where: {
                clientId: id
            }
        });
    } catch (error) {
        throw error;
    }
}

export {
    insertClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient
}