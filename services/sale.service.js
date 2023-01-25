import { insertSale, getAllSales, getSaleById, updateSale, deleteSale } from "../repositories/sale.repository.js"
import { getClientById } from '../repositories/client.repository.js';
import { getProductById, updateProduct } from '../repositories/product.repository.js';

async function saveSale(sale) {

    if (!sale.client_id || !sale.product_id || !sale.value || !sale.date) {
        throw new Error("Empty required fields");
    }

    const client = await getClientById(parseInt(sale.client_id));
    const product = await getProductById(parseInt(sale.product_id));

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

async function getSales() {
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

        const product = await getProductById(parseInt(sale.product_id));
        await deleteSale(id);
        product.stock++;
        await updateProduct(product);
    } else {
        throw new Error("Sale register not found");
    }
}

async function updateSaleById(sale) {
    if (!sale.sale_id) {
        throw new Error("Id is required field");
    }
    if (!sale.client_id || !sale.value || !sale.date) {
        throw new Error("Empty required fields");
    }
    let clientIdExists = await getClientById(parseInt(sale.client_id));

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