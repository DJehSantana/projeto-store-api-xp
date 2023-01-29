import { createProductInfo, createReview, deleteProductInfo, deleteReview, getAllProductsInfo, getProductInfo, updateProductInfo } from "../repositories/productInfo.repository.js";

async function saveProductInfo(productInfo) {
    if (!productInfo.productId) {
        throw new Error("productId is required field");
    }
    await createProductInfo(productInfo);
}

async function updateProductInfoByProductId(productInfo) {
    if (!productInfo.productId) {
        throw new Error("productId is required field");
    }

    await updateProductInfo(productInfo);
}

async function getOneProductInfo(productId) {
    if (!productId || !parseInt(productId)) {
        throw new Error("productId is required field");
    }

    return await getProductInfo(productId);
}

async function getProductsInfo(query) {
    return await getAllProductsInfo(query);
}

async function destroyProductInfo(productId) {
    if (!productId) {
        throw new Error("Register not found");
    }
    await deleteProductInfo(productId);
}

async function saveReview(productInfo) {
    if (!productInfo.productId || !productInfo.review) {
        throw new Error("Empty required fields");
    }

    return await createReview(productInfo.review, productInfo.productId);
}

async function destroyReview(productId, index) {
    if (!productId, !index) {
        throw new Error("Register not found");
    }
    await deleteReview(productId, index);
}

export {

    saveProductInfo,
    updateProductInfoByProductId,
    getOneProductInfo,
    getProductsInfo,
    destroyProductInfo,
    saveReview,
    destroyReview
}
