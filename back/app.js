// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var main = require('./routes/main');

import debugF from 'debug';
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import main from './routes/main.js'

const debug = debugF('server');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api', main);

export default app;
export { debug };
