let express = require('express');

let http = require('http');

var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

let PORT = process.env.PORT || 80;

const LINE_CHANNEL_ACCESS_TOKEN = 'lTKkZ0/fYh1QKcRf3OVPVCI303Dbff8ijAETN3Qw105r1buKUJf1mRdL2R/7mPlVpK9qTl5fNjrzV7Hvra/opiFFpo9koce/5Y6GvVMZaClXmZ2Xna38SLzQOi0Yj9AdreuBU00UsYTLm9I2aV0H1wdB04t89/1O/w1cDnyilFU=';

app.post('/webhook',function(req, res){
     res.status(200).end();
     console.log(req);
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));