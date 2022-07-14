const express = require('express');

const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/books');
router.get('/', async (req, res) => {
	res.render('books/index');
});
router.get('/new', async (req, res) => {
	try {
		const authors = await Author.find({});
		const book = new Book();
		res.render('books/new', { authors: authors, book: book });
	} catch {
		res.redirect('/books');
	}
});
router.post('/', async (req, res) => {
	const book = new Book({
		title: req.body.title,
		author: req.body.author,
		publishDate: newDate(req.body.publishDate),
		pageCount: req.body.pageCount,
		cover,
	});
});
module.exports = router;
