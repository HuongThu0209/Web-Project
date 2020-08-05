// const express = require('express');
// const addUser = require('../core/admin');
// const pool = require('../core/pool');
// const router = express.Router();
// const app = express();
// const adduser = new addUser();

var express = require('express');
var router = express.Router();
var dbConnect = require('../core/pool');
var bodyParser = require('body-parser');
//=========== thêm mới user

router.post("/add", function(req, res) {
    dbConnect.query(`insert into users ( username, fullname, password, email, adress) VALUES('${req.body.username}','${req.body.fullname}','${req.body.password}','${req.body.email}','${req.body.adress}')`, function(err){
        if(err) throw err;
        res.redirect("/adminUser")
    })
})

// ===========thêm mới sp======
router.post("/addpro", function(req, res) {
    dbConnect.query(`insert into products ( masp, imgsp, titlesp, pricesp, sizesp, mota) VALUES('${req.body.masp}','${req.body.imgsp}','${req.body.titlesp}','${req.body.pricesp}','${req.body.sizesp}','${req.body.mota}')`, function(err){
        if(err) throw err;
        res.redirect("/adminPro")
    })
})

// =========xóa user================

router.get("/delete/:id", function(req,res){
    dbConnect.query(`DELETE FROM users WHERE id=${req.params.id}`,function(err){
        if(err) throw err;
        res.redirect("/adminUser")
    })
})

//========== xoa sp========================
router.get("/deletepro/:id", function(req,res){
    dbConnect.query(`DELETE FROM products WHERE id=${req.params.id}`,function(err){
        if(err) throw err;
        res.redirect("/adminPro")
    })
})

// =============edit user=======================


router.get("/edit/:id", function(req,res){
    dbConnect.query(`SELECT * FROM users WHERE id=${req.params.id}`, function(err, result){
        if(err) throw err;
        data = {
            id:result[0].id,
            username:result[0].username,
            fullname:result[0].fullname,
            password:result[0].password,
            email:result[0].email,
            adress:result[0].adress
        }
        res.render("aduser-edit",{ data: result });
    });
});

//cap nhat 

router.post("/edit",function(req,res){
    dbConnect.query(`UPDATE users SET username='${req.body.username}',fullname='${req.body.fullname}',password='${req.body.password}',email='${req.body.email}',adress='${req.body.adress}'`,function(err){
        if(err) throw err;
        res.redirect("/adminUser");
    })
})


// //----------- user=====================
// router.get('/saveuser', (req, res, next) => {
//     let adduser = req.session.adduser;
//     // If there is a session named user that means the use is logged in. so we redirect him to home page by using /home route below
//     if(adduser) {
//         res.redirect('/admin-user');
//         return;
//     }
//     // IF not we just send the index page.
//     res.render('admin', {title:"Sport Play"});
// })

// router.post('/saveuser', (req, res, next) => {
//     let dataUser = {
//         username: req.body.username,
//         fullname: req.body.fullname,
//         password: req.body.password,
//         email: req.body.email,
//         adress: req.body.adress
//     };
//     adduser.create(dataUser, function(moreId) {
//         if(moreId) {
//             adduser.find(moreId, function(result) {
//                 req.session.adduser = result;
//                 req.session.opp = 0;
//                 res.redirect('/adminUser');
//             });
//         }
//         else {
//             console.log('error create..')
//         }
//     });
// });


// router.get('/delete', function(req, res, next) {
//     const ID = req.params.id
//     pool.query('seclect * FROM users WHERE id = ${ID}')
//         res.redirect('/admin-user');
    
// });


// app.get('/edit/:id',(req, res) => {
//     const id = req.params.id;
//     let sql = `Select * from users where id = ${id}`;
//     pool.query(sql, function(err, result){
//         if(err) throw err
//         callback(result);
//     });
//     res.render('aduser-edit');
    
// });


// app.post('/update',(req, res, next) => {
//     const userId = req.body.id;
//     let sql = "update users SET name='"+req.body.username+"', fullname='"+req.body.fullname+"', password='"+req.body.password+"',  email='"+req.body.email+"',  adress='"+req.body.adress+"' where id ="+userId;
//     let query = pool.query(sql,(err, results) => {
//         if(err) throw err;
//         res.redirect('/admin-user');
//     });
// });


// app.get('/delete/:id',(req, res) => {
//     const id = req.params.id;
//     let sql = `DELETE from users where id = ${id}`;
//     pool.query(sql, function(err, result){
//         if(err) throw err
//         callback(result);
//     });
//     res.render('admin-user');
// });


module.exports = router;