var express = require('express');
var router = express.Router();
var app = express();


var database = require('../core/db');
const pool = require('../core/pool');
db = new database();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sport Play' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Sport Play' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sport Play' });
});

router.get('/ManchesterUnited', function(req, res, next) {
  db.getmanchester(function(result){
    res.render('ManU', {manchesterUnited: result});
  });
});

router.get('/LiverPool', function(req, res, next) {
  db.getliver(function(result){
    res.render('liverpool', {liverPool: result});
  });
});

router.get('/AoVietNam', function(req, res, next) {
  db.getvietnam(function(result){
    res.render('vietnam', {vietNam: result});
  });
});

router.get('/AoThaiLan', function(req, res, next) {
  db.getthailan(function(result){
    res.render('thailan', {thaiLan: result});
  });
});

router.get('/GiayNikes', function(req, res, next) {
  db.getnike(function(result){
    res.render('nikes', {giayNikes: result});
  });
});

router.get('/GiayAdidas', function(req, res, next) {
  db.getadidas(function(result){
    res.render('adidas', {giayAdidas: result});
  });
});

router.get('/GiayTheThao', function(req, res, next) {
  db.getthethao(function(result){
    res.render('giaythethao', {theThao: result});
  })
});

router.get('/CauLong', function(req, res, next) {
  db.getcaulong(function(result){
    res.render('caulong', {cauLong: result});
  });
});

router.get('/Tennis', function(req, res, next) {
  db.gettennis(function(result){
    res.render('tennis', {tenNis: result});
  })
});

router.get('/Yoga', function(req, res, next) {
  db.getyoga(function(result){
    res.render('yoga', {yoGa: result});
  });
});

router.get('/new', function(req, res, next) {
  res.render('tintuc', { title: 'Sport Play' });
});

router.get('/new/thang5', function(req, res, next) {
  res.render('newthangthethao', { title: 'Sport Play' });
});

router.get('/new/sale50', function(req, res, next) {
  res.render('newsale50', { title: 'Sport Play' });
});

router.get('/new/nike36', function(req, res, next) {
  res.render('newnike36', { title: 'Sport Play' });
});

router.get('/new/lixitet', function(req, res, next) {
  res.render('newlixitet', { title: 'Sport Play' });
});

router.get('/new/xahangcuoimua', function(req, res, next) {
  res.render('newcuoimua', { title: 'Sport Play' });
});

router.get('/new/nikesale', function(req, res, next) {
  res.render('newnikesale', { title: 'Sport Play' });
});

router.get('/new/nguoinoitieng', function(req, res, next) {
  res.render('newnoitieng', { title: 'Sport Play' });
});

router.get('/contact', function(req, res, next) {
  res.render('lienhe', { title: 'Sport Play' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin-login', { title: 'Sport Play' });
});

router.get('/admin-page', function(req, res, next) {
  res.render('admin-page', { title: 'Sport Play' });
});

router.get('/adminPro', function(req, res, next) {
  db.getadproduct(function(result){
    res.render('admin-product', {adProduct: result});
  });
});


router.get('/add-pr', function(req, res, next) {
  res.render('add-product', { title: 'Sport Play' });
});

router.get('/adminUser', function(req, res, next) {
  db.getaduser(function(result){
    res.render('admin-user', {adUser: result});
  });
});

router.get('/add-user', function(req, res, next) {
  res.render('add-user', { title: 'Sport Play' });
});

router.get('/aduser-edit', function(req, res, next) {
  res.render('aduser-edit', { title: 'Sport Play' });
});

router.get('/pay', function(req, res, next) {
  res.render('pay', { title: 'Sport Play' });
});

router.get('/order', function(req, res, next) {
  res.render('oder', { title: 'Sport Play' });
});

// router.get('/delete', function(req, res, next) {
//   // const id = req.params.id
//   pool.query('DELETE FROM users WHERE id = ${id}', req.query.id, function(err, result) {
//     res.redirect('/admin-user');
//   });
  
// });


module.exports = router;
