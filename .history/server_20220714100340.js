if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const multer = require('multer');

const expresslayouts = require('express-ejs-layouts');
const upload = multer({
	destination,
});
// import all our routes pages
const indexrouter = require('./routes/index');
const authorrouter = require('./routes/authors');
const booksrouter = require('./routes/books');

// initiallize ur templating lang
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

// create a template of static file layout that does not change
app.set('layout', 'layouts/layout');
app.use(expresslayouts);

// allows to pass data from forms to express
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// a folder for all static file like css js and e.g root
app.use(express.static('public'));
app.use(express.json());

// connection to database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { UseNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to mongoose'));

// initialize routes to all our pages
app.use('/', indexrouter);
app.use('/authors', authorrouter);
app.use('/books', booksrouter);

// start our server on port 4000 or in production the given port by the host server
app.listen(process.env.PORT || 4000);
