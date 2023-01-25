import { insertSuplier, getAllSupliers, getSuplierById, updateSuplier, deleteSuplier } from "../repositories/suplier.repository.js"

async function saveSuplier(suplier) {
    if (!suplier.name || !suplier.cnpj || !suplier.phone || !suplier.email || !suplier.address) {
        throw new Error("Empty required fields");
    }
    return await insertSuplier(suplier);
}

async function getSupliers() {
    return await getAllSupliers();
}

async function getSuplier(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register not found");
    }

    return await getSuplierById(parseInt(id));

}

async function destroySuplier(id) {
    if (!id || !parseInt(id)) {
        throw new Error("Register not found");
    }
    await deleteSuplier(id);
}

async function updateSuplierById(suplier) {
    if (!suplier.suplier_id) {
        throw new Error("Id is required field");
    }
    if (!suplier.name || !suplier.cnpj || !suplier.phone || !suplier.email || !suplier.address) {
        throw new Error("Empty required fields");
    }

    return await updateSuplier(suplier);
}


export {
    saveSuplier,
    getSupliers,
    getSuplier,
    destroySuplier,
    updateSuplierById
}