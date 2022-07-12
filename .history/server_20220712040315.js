if(process.env.NODE_ENV !== 'production'){
    require('dotenv').[arse()]
}

const express = require('express');
const app = express();
const expresslayouts = require('express-layouts');
const indexrouter = require('./routes/index');
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
app.use('/', indexrouter);
app.set('layout', 'layouts/layout');
app.use(expresslayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { UseNewUrlParser: true });

const db = mongoose.connection();

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to mongoose'));

app.listen(process.env.PORT || 4000);
