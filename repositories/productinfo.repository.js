import mongoConnect from "../database/db.mongodb.js";
import { ProductInfoSchema } from "../schemas/productInfo.schema.js";

async function createProductInfo(productInfo) {
    try {
        const mongoose = await mongoConnect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        //o mongoose adiciona as propriedades a um objeto 
        //esse objeto possui acesso a vários métodos do mongoose 
        productInfo = new ProductInfo(productInfo);
        await productInfo.save();
    } catch (error) {
        throw error;
    }
}

async function updateProductInfo(productInfo) {
    try {
        const mongoose = await mongoConnect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        //filtra o objeto pelo productId e insere as atualizações
        return await ProductInfo.findOneAndUpdate({ productId: productInfo.productId }, productInfo);
    } catch (error) {
        throw error;
    }
}

async function getProductInfo(productId) {
    try {
        const mongoose = await mongoConnect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.findOne({ productId });
        //retorna a execução do filtro
        return await query.exec();
    } catch (error) {
        throw error;
    }
}

async function getAllProductsInfo(params) {
    try {
        const mongoose = await mongoConnect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.find(params);
        return await query.exec();
    } catch (error) {
        throw error;
    }
}

async function deleteProductInfo(productId) {
    try {
        const mongoose = await mongoConnect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);

        await ProductInfo.deleteOne({ productId });
    } catch (error) {
        throw error;
    }
}

async function createReview(review, productId) {
    try {
        const productInfo = await getProductInfo(productId);
        if (!productInfo) {
            throw new Error("Register not found");
        }
        productInfo.reviews.push(review);
        return await updateProductInfo(productInfo);
    }
    catch (error) {
        throw error;
    }
}

async function deleteReview(productId, index) {
    try {
        const productInfo = await getProductInfo(productId);
        if (!productInfo) {
            throw new Error("Register not found");
        }
        //splice - remove um item a partir do index informado
        productInfo.reviews.splice(index, 1);
        await updateProductInfo(productInfo);
    }
    catch (error) {
        throw error;
    }
}

export {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    getAllProductsInfo,
    deleteProductInfo,
    createReview,
    deleteReview
}
