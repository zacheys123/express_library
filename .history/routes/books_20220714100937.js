const express = require('express');

const router = express.Router();
const multer = require('multer');
const Author = require('../models/author');
const Book = require('../models/books');
const path = require('path');

const upload = multer({
	dest: path.join('public', Book.coverImagebase),
	fileFilter,
});
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
		description: req.body.description,
	});
});
module.exports = router;
