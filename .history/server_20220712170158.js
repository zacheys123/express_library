if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const expresslayouts = require('express-ejs-layouts');
const indexrouter = require('./routes/index');
const authorrouter = require('./routes/authors');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expresslayouts);
app.use('/', indexrouter);
app.use('/authors', authorrouter);
app.use(express.static('public'));
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { UseNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to mongoose'));

app.listen(process.env.PORT || 4000);
