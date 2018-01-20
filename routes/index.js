var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, result){
  	var productLoop = [];
  	var loopSize = 3;
  	for( var i = 0; i < result.length; i += loopSize){
  		productLoop.push(result.slice(i, i + loopSize));
  	}
  	res.render('shop/index', { title: 'Garbarino Test app', products: productLoop });
  });
});


/* Add Product */
router.get('/addproduct', function(req, res, next){
	res.render('shop/addproduct', {csrfToken: req.csrfToken()});
});

router.post('/addproduct', function(req, res, next){
 	var newProduct = new Product();
	newProduct.name = req.param('nombre');
	newProduct.price = req.param('price');
    newProduct.list_price = req.param('list_price');
	newProduct.brand = req.param('brand');
	newProduct.category_id = req.param('category');
	newProduct.imageSrc = req.param('img_src');
	newProduct.save(function(err, result){
		if(err){
			return err;
		}
		res.redirect('/');
	});
});

module.exports = router;
