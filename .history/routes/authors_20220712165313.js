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
	res.status(200).send(req.body.author);
});
module.exports = router;
