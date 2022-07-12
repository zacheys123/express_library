const mongoose = require('mongoose');

const authorschema = new mongoose.Schema({
	name: {
		type: String,
		required: True,
	},
});
module.exports = mongoose.model('Author', authorschema);
