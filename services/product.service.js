import { insertProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../repositories/product.repository.js"
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
    return await getProductById(parseInt(id));
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


export {
    saveProduct,
    getProducts,
    getProduct,
    destroyProduct,
    updateProductById
}