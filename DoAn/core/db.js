const pool = require('./pool');
function database() {};

database.prototype = {
    getmanchester : function(callback)
    {
        let sql = "select * from products where masp = 'M01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getliver : function(callback)
    {
        let sql = "select * from products where masp = 'L01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getvietnam : function(callback)
    {
        let sql = "select * from products where masp = 'VN01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getthailan : function(callback)
    {
        let sql = "select * from products where masp = 'TL01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getnike : function(callback)
    {
        let sql = "select * from products where masp = 'N01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getadidas : function(callback)
    {
        let sql = "select * from products where masp = 'A01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getthethao : function(callback)
    {
        let sql = "select * from products where masp = 'TT01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getcaulong : function(callback)
    {
        let sql = "select * from products where masp = 'C01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    gettennis : function(callback)
    {
        let sql = "select * from products where masp = 'TN01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getyoga : function(callback)
    {
        let sql = "select * from products where masp = 'YG01'"
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getadproduct : function(callback)
    {
        let sql = "select * from products "
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    getaduser : function(callback)
    {
        let sql = "select * from users "
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
}
module.exports = database;