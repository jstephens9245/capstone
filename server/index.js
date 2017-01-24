'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');

app.use(logger('combined'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('dist'));
app.use(express.static('public'));

app.use(routes);

module.exports = app;
