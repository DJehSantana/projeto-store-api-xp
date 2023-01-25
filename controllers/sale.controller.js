import { logger } from "../enums/logger.js";
import { destroySale, getSale, getSales, saveSale, updateSaleById } from "../services/sale.service.js";

async function createSale(req, res, next) {
    try {
        let sale = req.body;
        //SaleService
        sale = await saveSale(sale);
        res.send(sale);
        logger.info(`POST /sale - ${JSON.stringify(sale)}`);

    } catch (e) {
        next(e);
    }
}

async function getAllSales(req, res, next) {
    try {
        res.send(await getSales(req.query.product_id, req.query.client_id));
        logger.info(`GET /sale - ${res}`);
    } catch (e) {
        next(e)
    }
}

async function getSaleById(req, res, next) {
    try {
        const sale = await getSale(req.params.id);
        res.status(200).json(sale);
        logger.info(`GET /sale/:id - ${JSON.stringify(sale)}`);
    } catch (e) {
        next(e)
    }
}

async function deleteSale(req, res, next) {
    try {
        await destroySale(req.params.id);
        res.end();
        logger.info("DELETE /sale/:id - Register deleted with success");
    } catch (e) {
        next(e);
    }
}

async function updateSale(req, res, next) {
    try {
        let sale = req.body;
        sale = await updateSaleById(sale);
        res.send(sale);
        logger.info(`PUT /sale - ${JSON.stringify(sale)}`);

    } catch (e) {
        next(e);
    }
}

export {
    createSale,
    getAllSales,
    getSaleById,
    updateSale,
    deleteSale
};