const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('Author', authorschema);
