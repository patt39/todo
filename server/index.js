const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const logger = require('morgan');


const todosRoute = require('./routes/todo',);

// Express boilerplate middleware
// =============================================
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/api', [todosRoute]);

module.exports = app;