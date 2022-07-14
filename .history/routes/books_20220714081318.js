const express = require('express');

const router = express.Router();
const Author = require('../models/author');
router.get('/', async (req, res) => {
	res.send('All books');
});
router.get('/new', (req, res) => {
	res.render('new');
});
router.post('/', async (req, res) => {});
module.exports = router;
