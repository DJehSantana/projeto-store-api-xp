import { logger } from "../enums/logger.js";
import { destroyClient, getClient, getClients, saveClient } from "../services/client.service.js";

async function createClient(req, res, next) {
    try {
        let client = req.body;
        //ClientService
        res.send(await saveClient(client));
        logger.info(`POST /client - ${JSON.stringify(client)}`);

    } catch (e) {
        next(e);
    }
}

async function getAllClients(req, res, next) {
    try {
        res.send(await getClients());
        logger.info(`GET /client - ${res}`);
    } catch (e) {
        next(e)
    }
}

async function getClientById(req, res, next) {
    try {
        const client = await getClient(req.params.id);
        res.status(200).json(client);
        logger.info(`GET /client/:id - ${JSON.stringify(client)}`);
    } catch (e) {
        next(e)
    }
}

async function updateClient(req, res, next) {
    try {
        const id = req.params.id;
    } catch (e) {
        next(e)
    }
}

async function deleteClient(req, res, next) {
    try {
        await destroyClient(req.params.id);
        res.end();
        logger.info("DELETE /client/:id - Register deleted with success");
    } catch (e) {
        next(e);
    }
}

export {
    createClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient
};