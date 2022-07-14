const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	descrption: {
		type: String,
	},
	publishDate: {
		type: Number,
		required: true,
	},
});
module.exports = mongoose.model('Author', authorschema);
