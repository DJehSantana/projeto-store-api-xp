import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
/*
async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    });
    global.connection = pool;

    return pool.connect();
}
*/

const sequelize = new Sequelize(process.env.DATABASE_URL,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    });

export default sequelize;