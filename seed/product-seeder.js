var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shop');

var products = [
	new Product({
		name: 'Televisor 32 LED',
		price: 19999.99,
		list_price: 29999.99,
		brand: "SONY",
		category_id: 12345,
		imageSrc: 'https://thumb.pccomponentes.com/w-530-530/articles/5/53233/samsung-ue32eh4003-32-led.jpg'
	}),
	new Product({
		name: 'Televisor 50 4K',
		price: 29999.99,
		list_price: 39999.99,
		brand: "LG",
		category_id: 12345,
		imageSrc: 'http://www.lg.com/es/images/television/50pt353/gallery/medium01.jpg'
	}),
	new Product({
		name: 'Microsoft OFFICE 365 PERSONAL',
		price: 999.99,
		list_price: 999.99,
		brand: "Microsoft",
		category_id: 123123,
		imageSrc: 'https://cdn.shopify.com/s/files/1/0855/1446/products/Office-365-1Kx1K_61bb0c7c-066c-4564-920e-a1a24ff17a2c_1024x1024.jpg',
		virtual: true
	})
];


var done = 0;

for(var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if( done === products.length ){
			exit();
		}
	});
}


function exit(){
	mongoose.disconnect();
}
