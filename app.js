const express = require('express');
var path = require('path')
var serveStatic = require('serve-static')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')))

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(morgan('dev'));


const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

app.use("/user", userRoute);

module.exports = app;
