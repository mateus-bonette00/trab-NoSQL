const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'myuser',
    database: 'mydatabase',
    password: 'mypassword',
});

module.exports.connect = async () => {
    await pool.connect();
}

module.exports.query = async (sql) => {
    return await pool.query(sql);
}