import { Client } from '../models/client.model.js';
import { Product } from '../models/product.model.js';
import { Sale } from '../models/sale.model.js';

async function insertSale(sale) {
    try {
        return await Sale.create(sale);
    } catch (error) {
        throw error;
    }
}

async function getAllSales() {
    try {
        return await Sale.findAll({
            include: [
                {
                    model: Product
                },
                {
                    model: Client
                }
            ]
        });
    } catch (error) {
        throw error;
    }
}

async function getSaleById(id) {
    try {
        return await Sale.findByPk(id);
    } catch (error) {
        throw error;
    }
}


async function getSalesByProductId(productId) {
    try {
        return await Sale.findAll({
            where: {
                productId: productId
            },
            include: [
                {
                    model: Client
                }
            ]
        });
    } catch (error) {
        throw error;
    }
}

async function getSalesBySuplierId(suplierId) {
    try {
        return await Sale.findAll({
            include: [
                {
                    model: Product,
                    where: {
                        suplierId: suplierId
                    }
                }
            ]
        });
    } catch (error) {
        throw error;
    }
}

async function getSalesByClientId(clientId) {
    try {
        return await Sale.findAll({
            where: {
                clientId: clientId
            },
            include: [
                {
                    model: Product
                }
            ]
        });

    } catch (error) {
        throw error;
    }
}


async function updateSale(sale) {
    try {
        const id = sale.saleId;
        await Sale.update({
            value: sale.value,
            date: sale.date
        }, {
            where: {
                saleId: id
            }
        });
        return await getSaleById(id);
    } catch (error) {
        throw error;
    }
}

async function deleteSale(id) {
    try {
        await Sale.destroy({
            where: {
                saleId: id
            }
        });
    } catch (error) {
        throw error;
    }
}

export {
    insertSale,
    getAllSales,
    getSaleById,
    getSalesByClientId,
    getSalesByProductId,
    getSalesBySuplierId,
    updateSale,
    deleteSale
}

