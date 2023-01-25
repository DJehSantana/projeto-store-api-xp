import Sequelize from 'sequelize';
import postgres from '../database/db.postgres.js';
import { Suplier } from "./suplier.model.js";

const Product = postgres.define('products', {
    productId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

Product.belongsTo(Suplier, { foreignKey: "suplierId" });

export { Product } 
