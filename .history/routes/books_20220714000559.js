const express = require('express');

const router = express.Router();
const Author = require('../models/author');
router.get('/', async (req, res) => {
	re.send('All books');
});
router.get('/new', (req, res) => {
	res.render('authors/new', { author: new Author() });
});
router.post('/', async (req, res) => {});
module.exports = router;
