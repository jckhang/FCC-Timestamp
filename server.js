'use strict';

// Call the package we need.
var express = require('express');
var app = express();
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;        // set our port

// The format follows as, alias to use for real path, also allows permission to such path.
//app.use('/api', express.static(process.cwd() + '/app/api'));

routes(app);
api(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
