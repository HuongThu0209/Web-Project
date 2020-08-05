const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host : 'localhost',
    user : 'thuhuong',
    password : 'Huonguchiha37',
    database : 'mydb',
});

pool.getConnection((err, connection) => {
    if(err)
        console.error("not connecting to the database ...");
    
    if(connection) 
        console.log("Ket noi thanh cong");
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;