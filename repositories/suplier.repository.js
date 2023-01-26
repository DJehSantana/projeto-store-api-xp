import { Suplier } from '../models/suplier.model.js';

async function insertSuplier(suplier) {
    try {
        return await Suplier.create(suplier);
    } catch (error) {
        throw error;
    }
}

async function getAllSupliers() {
    try {
        return await Suplier.findAll();
    } catch (error) {
        throw error;
    }
}

async function getSuplierById(id) {
    try {
        return await Suplier.findByPk(id);
    } catch (error) {
        throw error;
    }
}

async function updateSuplier(suplier) {
    try {
        const id = suplier.suplierId;
        await Suplier.update(suplier, {
            where: {
                suplierId: id
            }
        });
        return await getSuplierById(id);
    } catch (error) {
        throw error;
    }
}

async function deleteSuplier(id) {
    try {
        await Suplier.destroy({
            where: {
                suplierId: id
            }
        });
    } catch (error) {
        throw error;
    }
}

export {
    insertSuplier,
    getAllSupliers,
    getSuplierById,
    updateSuplier,
    deleteSuplier
}