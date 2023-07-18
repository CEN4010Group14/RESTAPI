const mysql = require('mysql2/promise')
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    })
    const [rows, fields] = await connection.execute(sql, params)
    return rows
}

module.exports = {
    query
}