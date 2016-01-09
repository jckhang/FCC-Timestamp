'use strict';

// Call the package we need.
var express = require('express');
var app = express();
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');
