import { connect } from "../database/db.postgres.js";

async function insertSale(sale) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO sales (client_id, product_id, value, date) VALUES($1, $2, $3, $4) RETURNING *"
        const values = [sale.client_id, sale.product_id, sale.value, sale.date];

        const resultado = await conn.query(sql, values);
        //Retornando novo registro 
        return resultado.rows[0];

    } catch (error) {
        throw error;
    } finally {
        //encerrando a conexão
        conn.release();
    }
}


async function getAllSales() {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM sales");
        return resultado.rows;
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function getSaleById(id) {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [id]);
        //retorna o primeiro elemento da lista
        return resultado.rows[0];
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function getSalesByProductId(product_id) {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM sales WHERE product_id = $1", [product_id]);
        return resultado.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getSalesByClientId(client_id) {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM sales WHERE client_id = $1", [client_id]);
        return resultado.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function updateSale(sale) {
    const conn = await connect();
    try {
        const sql = "UPDATE sales SET client_id = $1, value = $2, date = $3  WHERE sale_id = $4";
        const values = [sale.client_id, sale.value, sale.date, sale.sale_id];

        const resultado = await conn.query(sql, values);
        return resultado.rows[0];

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function deleteSale(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM sales WHERE sale_id = $1", [id]);

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

export {
    insertSale,
    getAllSales,
    getSaleById,
    getSalesByProductId,
    getSalesByClientId,
    updateSale,
    deleteSale
}