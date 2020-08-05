const pool = require('./pool');
const bcrypt = require('bcrypt');

function addProduct() {};

addProduct.prototype = {
    find : function(addproduct = null, callback)
    {
        
        // prepare the sql query
        let sql = `SELECT * FROM products WHERE ID = ?`;
        pool.query(sql, addproduct, function(err, result) {
            if(err) throw err
            if(result.length) {
                callback(result[0]);
            }else {
                callback(null);
            }
        });
    },
    create : function(body, callback)
    {
        var bind = [];
        // loop in the attributes of the object and push the values into the bind array.
        for(prop in body){
            bind.push(body[prop]);
        }
        // prepare the sql query
        let sql = `INSERT INTO products(masp, imgsp, titlesp, pricesp, sizesp, mota) VALUES (?, ?, ?, ?, ?, ?)`;
        // call the query give it the sql string and the values (bind array)
        pool.query(sql, bind, function(err, result) {
            if(err) throw err;
            // return the last inserted id. if there is no error
            callback(result.insertId);
        });
    }
}

module.exports = addProduct;