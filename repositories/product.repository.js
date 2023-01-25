import { connect } from "../database/db.postgres.js";

async function insertProduct(product) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO products (suplier_id, name, description, value, stock) VALUES($1, $2, $3, $4, $5) RETURNING *"
        const values = [product.suplier_id, product.name, product.description, product.value, product.stock];

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

async function getAllProducts() {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM products");
        return resultado.rows;
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function getProductById(id) {
    const conn = await connect();
    try {
        const resultado = await conn.query("SELECT * FROM products WHERE product_id = $1", [id]);
        //retorna o primeiro elemento da lista
        return resultado.rows[0];
    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function updateProduct(product) {
    const conn = await connect();
    try {
        const sql = "UPDATE products SET name = $1, description = $2, value = $3, stock = $4, suplier_id = $5 WHERE product_id = $6";
        const values = [product.name, product.description, product.value, product.stock, product.suplier_id, product.product_id];

        const resultado = await conn.query(sql, values);
        return resultado.rows[0];

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

async function deleteProduct(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM products WHERE product_id = $1", [id]);

    } catch (error) {
        throw error;

    } finally {
        conn.release();
    }
}

export {
    insertProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}