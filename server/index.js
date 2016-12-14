// var socket_io = require('socket.io');
// var http = require('http');
// var express = require('express');

// var app = express();
// app.use(express.static('build/dev/public'));

// var server = http.Server(app);
// var io = socket_io(server);

// var PORT = process.env.PORT || 8080;

// console.log(`Server running in ${process.env.NODE_ENV} mode`);

// io.on('connection', function(socket) {
// 	console.log('a user connected');
	
//   	socket.on('disconnect', function() {
//     	console.log('user disconnected');
//   	});
// });

// server.listen(PORT, function() {
// 	console.log("listening on " + PORT);
// });


import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

mongoose.Promise= global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
exports.app = app;

app.use(express.static(process.env.CLIENT_PATH));

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}