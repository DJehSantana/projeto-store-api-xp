import { insertProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../repositories/product.repository.js"
import { createProductInfo, createReview, deleteProductInfo, deleteReview, getAllProductsInfo, getProductInfo, updateProductInfo } from "../repositories/productInfo.repository.js";
import { getSalesByProductId } from "../repositories/sale.repository.js";
import { getSuplierById } from '../repositories/suplier.repository.js'

async function saveProduct(product) {
    if (!product.name || !product.description || !product.value || !product.stock) {
        throw new Error("Empty required fields");
    }
    //verificando se o fornecedor informado consta no BD
    let idSuplierExist = await getSuplierById(parseInt(product.suplierId));
    if (!idSuplierExist) {
        throw new Error("Supplier informed not found");
    }
    return await insertProduct(product);
}

async function getProducts() {
    return await getAllProducts();
}

async function getProduct(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register not found");
    }
    const product = await getProductById(parseInt(id));
    //adiciona as informações do produto vindas do mongo db em uma propriedade do produto
    product.info = await getProductInfo(parseInt(id));
    return product;
}

async function destroyProduct(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register not found");
    }
    const sales = await getSalesByProductId(id);
    //verifica se o produto já teve vendas
    if (sales.length > 0) {
        throw new Error("This product has already been sold, cannot be deleted.");
    }
    await deleteProduct(id);
}

async function updateProductById(product) {
    if (!product.productId) {
        throw new Error("Id is required field");
    }
    if (!product.suplierId || !product.name || !product.description || !product.value || !product.stock) {
        throw new Error("Empty required fields");
    }

    let idSuplierExist = await getSuplierById(parseInt(product.suplierId));
    if (!idSuplierExist) {
        throw new Error("Supplier informed not found");
    }

    return await updateProduct(product);
}

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
    saveProduct,
    getProducts,
    getProduct,
    destroyProduct,
    updateProductById,
    saveProductInfo,
    updateProductInfoByProductId,
    getOneProductInfo,
    getProductsInfo,
    destroyProductInfo,
    saveReview,
    destroyReview
}