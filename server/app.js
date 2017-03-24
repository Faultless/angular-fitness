var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var api = require('./routes/api');

var bodyParser = require('body-parser');

console.log(__dirname);

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the Server
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var app = express();
exports.app = app;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));