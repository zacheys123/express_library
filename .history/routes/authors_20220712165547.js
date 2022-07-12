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
	res.status(201).send(req.body.author);
});
module.exports = router;
