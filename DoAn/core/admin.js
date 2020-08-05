const pool = require('./pool');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

//================ add user===================
function addUser() {};

addUser.prototype = {
    find : function(adduser = null, callback)
    {
        // if the user variable is defind
        if(adduser) {
            // if user = number return field = id, if user = string return field = username.
            var field = Number.isInteger(adduser) ? 'id' : 'username';
        }
        // prepare the sql query
        let sql = `SELECT * FROM users WHERE ${field} = ?`;
        pool.query(sql, adduser, function(err, result) {
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
        let sql = `INSERT INTO users(username, fullname, password, email, adress) VALUES (?, ?, ?, ?, ?)`;
        // call the query give it the sql string and the values (bind array)
        pool.query(sql, bind, function(err, result) {
            if(err) throw err;
            // return the last inserted id. if there is no error
            callback(result.insertId);
        });
    }
}



module.exports = addUser;