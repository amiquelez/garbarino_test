var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	price: {type: Number, required: true},
	list_price: {type: Number, required: true},
	brand: {type: String, required: true},
	category_id: {type: Number, required: true},
	imageSrc: {type: String, required: true},
	virtual: {type: Boolean, required: false}
});

module.exports = mongoose.model('Product', schema);