import { Product } from '../models/product.model.js';

async function insertProduct(product) {
    try {
        return await Product.create(product);
    } catch (error) {
        throw error;
    }
}

async function getAllProducts() {
    try {
        return await Product.findAll();
    } catch (error) {
        throw error;
    }
}

async function getProductById(id) {
    try {
        //retorna o objeto já como um json {raw: true}
        return await Product.findByPk(id, { raw: true });
    } catch (error) {
        throw error;
    }
}

async function updateProduct(product) {
    try {
        const id = product.productId;
        await Product.update(product, {
            where: {
                productId: id
            }
        });
        return await getProductById(id);
    } catch (error) {
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        await Product.destroy({
            where: {
                productId: id
            }
        });
    } catch (error) {
        throw error;
    }
}

export {
    insertProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}