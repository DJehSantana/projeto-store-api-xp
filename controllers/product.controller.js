import { logger } from "../enums/logger.js";
import { destroyProduct, destroyProductInfo, destroyReview, getOneProductInfo, getProduct, getProducts, getProductsInfo, saveProduct, saveProductInfo, saveReview, updateProductById, updateProductInfoByProductId } from "../services/product.service.js";

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
        logger.info(`GET /product/info - ${JSON.stringify(productsInfo)}`);

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
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    getAllProductsInfo,
    deleteProductInfo,
    createProductReview,
    deleteProductReview
};