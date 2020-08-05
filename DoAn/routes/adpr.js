const express = require('express');
const addProduct = require('../core/adpro');
const router = express.Router();

const addproduct = new addProduct();



//=========== products======================

router.get('/save', (req, res, next) => {
    let addproduct = req.session.addproduct;
    // If there is a session named user that means the use is logged in. so we redirect him to home page by using /home route below
    if(addproduct) {
        res.redirect('/admin-page');
        return;
    }
    // IF not we just send the index page.
    res.render('admin', {title:"Sport Play"});
})

router.post('/save', (req, res, next) => {
    let dataPro = {
        masp: req.body.masp,
        imgsp: req.body.imgsp,
        titlesp: req.body.titlesp,
        pricesp: req.body.pricesp,
        sizesp: req.body.sizesp,
        mota: req.body.mota
    };
    addproduct.create(dataPro, function(morId) {
        if(morId) {
            addproduct.find(morId, function(result) {
                req.session.addproduct = result;
                req.session.opp = 1;
                res.redirect('/admin-page');
            });
        }
        else {
            console.log('error create..')
        }
    });
});

module.exports = router;