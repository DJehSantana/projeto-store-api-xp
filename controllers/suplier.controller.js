import { logger } from "../enums/logger.js";
import { destroySuplier, getSuplier, getSupliers, saveSuplier, updateSuplierById } from "../services/suplier.service.js";

async function createSuplier(req, res, next) {
    try {
        let suplier = req.body;
        //SuplierService
        suplier = await saveSuplier(suplier);
        res.send(suplier);
        logger.info(`POST /supplier - ${JSON.stringify(suplier)}`);

    } catch (e) {
        next(e);
    }
}

async function getAllSupliers(req, res, next) {
    try {
        res.send(await getSupliers());
        logger.info(`GET /supplier - ${res}`);
    } catch (e) {
        next(e)
    }
}

async function getSuplierById(req, res, next) {
    try {
        const suplier = await getSuplier(req.params.id);
        res.status(200).json(suplier);
        logger.info(`GET /supplier/:id - ${JSON.stringify(suplier)}`);
    } catch (e) {
        next(e)
    }
}

async function deleteSuplier(req, res, next) {
    try {
        await destroySuplier(req.params.id);
        res.end();
        logger.info("DELETE /supplier/:id - Register deleted with success");
    } catch (e) {
        next(e);
    }
}

async function updateSuplier(req, res, next) {
    try {
        let suplier = req.body;
        suplier = await updateSuplierById(suplier);
        res.send(suplier);
        logger.info(`PUT /supplier - ${JSON.stringify(suplier)}`);

    } catch (e) {
        next(e);
    }
}

export {
    createSuplier,
    getAllSupliers,
    getSuplierById,
    updateSuplier,
    deleteSuplier
};