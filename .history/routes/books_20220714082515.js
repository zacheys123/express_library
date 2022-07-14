const express = require('express');

const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/books');
router.get('/', async (req, res) => {
	res.send('All books');
});
router.get('/new', (req, res) => {
	res.render('books/new');
});
router.post('/', async (req, res) => {
	const authors=Author.find({});
	const book=new 
});
module.exports = router;
