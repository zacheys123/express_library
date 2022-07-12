const express = require('express');

const router = express.Router();
const Author = require('../models/author');
router.get('/', (req, res) => {
	res.render('authors/index');
});
router.get('/new', (req, res) => {
	res.render('authors/new', { author: new Author() });
});
router.post('/', async (req, res) => {
	const author = new Author({
		name: req.body.name,
	});
});
module.exports = router;
