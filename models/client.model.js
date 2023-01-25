import Sequelize from 'sequelize';
import postgres from '../database/db.postgres.js';

/** Undescored: 
    *Responsável por fazer o Sequelize mapear o que está
    *como CamelCase no JS como Underline no BD 
 */

const Client = postgres.define('clients', {
    clientId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    adress: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

export { Client } 
