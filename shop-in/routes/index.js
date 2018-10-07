var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');
router.use(csrfProtection);

router.get('/', function(req, res, next) {
  
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 4;
    for (var i= 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i,i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping cart', products: productChunks });
  });
});

router.get('/users/signup',function(req,res,next){
  var messages = req.flash('error');
  res.render('users/signup', { csrfToken: req.csrfToken(),messages: messages, hasErrors: messages.length > 0});
});
router.post('/users/signup', passport.authenticate('local.signup', {
  
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true
}));

router.get('/users/profile', function( req, res, next){
  res.render('users/profile');
});
module.exports = router;
