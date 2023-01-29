import { saveProductInfo, saveReview, destroyProductInfo, destroyReview, updateProductInfoByProductId, getOneProductInfo, getProductsInfo } from '../services/productInfo.service.js';
import { logger } from "../enums/logger.js";

async function createProductInfo(req, res, next) {
    try {
        let productInfo = req.body;

        productInfo = await saveProductInfo(productInfo);
        res.status(201).json(productInfo);
        logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);

    } catch (e) {
        next(e);
    }
}

async function updateProductInfo(req, res, next) {
    try {
        let productInfo = req.body;
        productInfo = await updateProductInfoByProductId(productInfo);
        res.status(200).json(productInfo);
        logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);

    } catch (e) {
        next(e);
    }
}

async function getProductInfo(req, res, next) {
    try {
        const productId = req.params.id;
        const productInfo = await getOneProductInfo(productId);
        res.status(200).json(productInfo);
        logger.info(`GET /product/info - ${JSON.stringify(productInfo)}`);

    } catch (e) {
        next(e);
    }
}

async function getAllProductsInfo(req, res, next) {
    try {
        const query = req.query;
        const productsInfo = await getProductsInfo(query);
        res.status(200).json(productsInfo);
        logger.info(`GET /product/info - Success`);

    } catch (e) {
        next(e);
    }
}

async function deleteProductInfo(req, res, next) {
    try {
        await destroyProductInfo(req.params.id);
        res.status(204).end();
        logger.info(`DELETE /product/info - Register delete with success`);

    } catch (e) {
        next(e);
    }
}

async function createProductReview(req, res, next) {
    try {
        const productInfo = req.body;
        await saveReview(productInfo);
        res.status(201).end();
        logger.info(`POST /product/review - Created with success`);

    } catch (e) {
        next(e);
    }
}

async function deleteProductReview(req, res, next) {
    try {
        await destroyReview(req.params.id, req.params.index);
        res.status(204).end();
        logger.info(`DELETE /product/review - Register delete with success`);

    } catch (e) {
        next(e);
    }
}

export {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    getAllProductsInfo,
    deleteProductInfo,
    createProductReview,
    deleteProductReview
}
