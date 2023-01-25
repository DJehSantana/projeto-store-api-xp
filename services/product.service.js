import { insertProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../repositories/product.repository.js"

async function saveProduct(product) {
    if (!product.suplier_id || !product.name || !product.description || !product.value || !product.stock) {
        throw new Error("Empty required fields");
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
    await deleteProduct(id);
}

async function updateProductById(product) {
    if (!product.product_id) {
        throw new Error("Id is required field");
    }
    if (!product.suplier_id || !product.name || !product.description || !product.value || !product.stock) {
        throw new Error("Empty required fields");
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