import { insertSale, getAllSales, getSaleById, updateSale, deleteSale, getSalesByProductId, getSalesByClientId, getSalesBySuplierId } from "../repositories/sale.repository.js"
import { getClientById } from '../repositories/client.repository.js';
import { getProductById, updateProduct } from '../repositories/product.repository.js';

async function saveSale(sale) {

    if (!sale.clientId || !sale.productId || !sale.value || !sale.date) {
        throw new Error("Empty required fields");
    }

    const client = await getClientById(parseInt(sale.clientId));
    const product = await getProductById(parseInt(sale.productId));

    if (!client || !product) {
        throw new Error("Client or Product informed does not found");
    }

    //verificando se existe o produto em estoque
    if (product.stock > 0) {
        sale = await insertSale(sale);
        //reduzindo a quantidade em estoque do produto
        product.stock--;
        //atualizando produto 
        await updateProduct(product);
        return sale;
    } else {
        throw new Error("Don't this product in stock");
    }
}

async function getSales(productId, clientId, suplierId) {
    //caso receba algum parâmetro na query
    if (productId) {
        return await getSalesByProductId(productId);
    }
    if (clientId) {
        return await getSalesByClientId(clientId);
    }
    if (suplierId) {
        return await getSalesBySuplierId(suplierId);
    }
    return await getAllSales();
}

async function getSale(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register not found");
    }

    return await getSaleById(parseInt(id));
}

async function destroySale(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register Id not found");
    }
    const sale = await getSaleById(id);
    if (sale) {

        const product = await getProductById(parseInt(sale.productId));
        await deleteSale(id);
        product.stock++;
        await updateProduct(product);
    } else {
        throw new Error("Sale register not found");
    }
}

async function updateSaleById(sale) {
    if (!sale.saleId) {
        throw new Error("Id is required field");
    }
    if (!sale.clientId || !sale.value || !sale.date) {
        throw new Error("Empty required fields");
    }
    let clientIdExists = await getClientById(parseInt(sale.clientId));

    if (!clientIdExists) {
        throw new Error("Client informed not found");
    }

    return await updateSale(sale);
}


export {
    saveSale,
    getSales,
    getSale,
    destroySale,
    updateSaleById
}