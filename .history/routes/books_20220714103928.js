const express = require('express');

const router = express.Router();
const multer = require('multer');
const Author = require('../models/author');
const Book = require('../models/books');
const path = require('path');
const ImageMIMETypes = ['images/jpg', 'images/png', 'images/gif'];
const upload = multer({
	dest: path.join('public', Book.coverImagebase),
	fileFilter: (req, file, callback) => {
		callback(null, ImageMIMETypes.includes(file.mimetype));
	},
});
router.get('/', async (req, res) => {
	res.render('books/index');
});

router.get('/new', async (req, res) => {
	renderNewPage(res, new Book());
});

router.post('/', upload.single('cover'), async (req, res) => {
	const filname = req.file != null ? req.file.filename : null;
	const book = new Book({
		title: req.body.title,
		author: req.body.author,
		publishDate: newDate(req.body.publishDate),
		pageCount: req.body.pageCount,
		coverImagebase: filename,
		description: req.body.description,
	});
	try {
		const newbook = await book.save();
		res.redirect('books');
	} catch {
		res.render('books/new');
	}
});

async function renderNewPage(res, book, haserror = false) {
	try {
		const authors = await Author.find({});
		const params = { authors: authors, book: book };
		if (haserror) params.errorMessage = 'Error Creating Book';
		res.render('books/new,params');
	} catch {
		res.redirect('/books');
	}
}

module.exports = router;
