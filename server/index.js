//server index.js
var socket_io = require('socket.io');
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('build/dev/public'));

var server = http.Server(app);
var io = socket_io(server);

var PORT = process.env.PORT || 8080;

io.on('connection', function(socket) {
	console.log('a user connected');
	
  	socket.on('disconnect', function() {
    	console.log('user disconnected');
  	});
});

server.listen(PORT, function() {
	console.log("listening on " + PORT);
});