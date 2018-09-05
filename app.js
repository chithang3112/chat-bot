let express = require('express');

let http = require('http');

var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

let PORT = process.env.PORT || 80;

app.post('/webhook',function(req, res){
     res.status(200).end();
    console.log(req.REPLY_MESSAGE);
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));