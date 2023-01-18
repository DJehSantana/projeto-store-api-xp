import { insertClient, getAllClients, getClientById, updateClient, deleteClient } from "../repositories/client.repository.js"

async function saveClient(client) {
    if (!client.name || !client.cpf || !client.phone || !client.email || !client.adress) {
        throw new Error("Empty required fields");
    }
    return await insertClient(client);
}

async function getClients() {
    return await getAllClients();
}

async function getClient(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register not found");
    }

    return await getClientById(parseInt(id));

}


export { saveClient, getClients, getClient }