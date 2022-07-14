const express = require('express');

const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/books');
router.get('/', async (req, res) => {
	res.send('All books');
});
router.get('/new', async (req, res) => {
	try {
		const authors = await Author.find({});
		const book = new Book();
		res.render('books/new', { authors: authors, book: book });
	} catch (err) {}
});
router.post('/', async (req, res) => {});
module.exports = router;
