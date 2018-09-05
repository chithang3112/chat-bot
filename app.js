let express = require('express');

let http = require('http');

var app = express();

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

app.get('/webhook',function(req, res){
	res.sendStatus(200);
});