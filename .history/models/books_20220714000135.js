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
		type: Date,
		required: true,
	},
	pageCount: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	coverImage: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.model('Book,bookSchema'),
		required: true,
		ref: 'Author',
	},
});
module.exports = mongoose.model('Author', authorschema);
