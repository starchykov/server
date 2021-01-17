const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const morgan        = require('morgan');

const postsRoute    = require('./routes/posts');
const userRoute     = require('./routes/user');
const commentsRoute = require('./routes/comments');
const imageRoute    = require('./routes/images');

const favicon       = require('express-favicon');
const path          = require('path');

const app           = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Logo on server
app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//API routes
app.use('/uploads', express.static('uploads'));
app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);
app.use("/images", imageRoute);

//For correctly working react-router-dom
app.use('/', (req, res) => { res.sendFile(path.join(__dirname, 'build/index.html'))});

module.exports = app;
