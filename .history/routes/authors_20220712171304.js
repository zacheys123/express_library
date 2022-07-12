const express = require('express');

const router = express.Router();
const Author = require('../models/author');
router.get('/', (req, res) => {
	res.render('authors/index');
});
router.get('/new', (req, res) => {
	res.render('authors/new', { author: new Author() });
});
router.post('/', (req, res) => {
	if (!req.body.name) {
		return res
			.status(400)
			.json({ success: false, msg: 'Enter data please' });
	}
	const author = new Author({
		name: req.body.name,
	});
	author.save((err, newAuthor) => {
		res.render('authors/new', {
			if(err){
				
			}
			author: author,
			errormessage: 'error creating author',
		});
	});
	res.status(201).send(req.body.name);
});
module.exports = router;
