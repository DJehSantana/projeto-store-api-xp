import pg from 'pg';
//import dotenv from 'dotenv';

//dotenv.config();

/**O pool ajuda a gerenciar as conexões do Banco de Dados.
    * O Banco de dados suporta uma quantidade de conexões.
    * Quando a aplicação pedir uma nova conexão, o pool vai procurar se existe
    * já alguma conexão disponível que possa ser utilizada,
    * se houver ele utilizará a conexão disponível ao invés de criar uma nova
*/

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

export { connect }