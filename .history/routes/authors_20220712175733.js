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
	const author = new Author({
		name: req.body.name,
	});

	try {
	} catch {
		res.render('authors/new', {
			author: author,
			errorMessage: 'Error creating author',
		});
	}
	// author.save((err, newAuthor) => {
	// 	if (err) {
	//
	// 	} else {
	// 		// res.redirect(`authors/${newAuthor.id}`);
	// 		res.redirect(`authors`);
	// 	}
	// });
});
module.exports = router;
