// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// const conn = mongoose.createConnection(process.env.MONGODB_URI)
const commenttest = require('./src/router/commentdata');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(cookieParser());


app.use('/api', commenttest);
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})
app.use(express.static('dist'))


module.exports = app;
