import { logger } from "../enums/logger.js";
import { destroyProduct, getProduct, getProducts, saveProduct, updateProductById } from "../services/product.service.js";

async function createProduct(req, res, next) {
    try {
        let product = req.body;
        //ProductService
        product = await saveProduct(product);
        res.status(201).json(product);
        logger.info(`POST /product - ${JSON.stringify(product)}`);

    } catch (e) {
        next(e);
    }
}

async function getAllProducts(req, res, next) {
    try {
        res.send(await getProducts());
        logger.info(`GET /product - ${res}`);
    } catch (e) {
        next(e)
    }
}

async function getProductById(req, res, next) {
    try {
        const product = await getProduct(req.params.id);
        res.status(200).json(product);
        logger.info(`GET /product/:id - ${JSON.stringify(product)}`);
    } catch (e) {
        next(e)
    }
}

async function deleteProduct(req, res, next) {
    try {
        await destroyProduct(req.params.id);
        res.status(204).end();
        logger.info("DELETE /product/:id - Register deleted with success");
    } catch (e) {
        next(e);
    }
}

async function updateProduct(req, res, next) {
    try {
        let product = req.body;
        product = await updateProductById(product);
        res.status(200).json(product);
        logger.info(`PUT /product - ${JSON.stringify(product)}`);

    } catch (e) {
        next(e);
    }
}

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};