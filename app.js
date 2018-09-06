let express = require('express');

let http = require('http');

var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

const LINE_CHANNEL_ACCESS_TOKEN ='f9MGc9opvgyXb+GGZIUfezr/7YcYD9NhLVBIMAA/Qs/qBWw5Fs/27YNQxqikWXW2pK9qTl5fNjrzV7Hvra/opiFFpo9koce/5Y6GvVMZaCnm9FIFqzE3IXS9ghfsSGIkzfEV9SzuVVt4F72Lxi02kAdB04t89/1O/w1cDnyilFU=';

let PORT = process.env.PORT || 80;

app.post('/webhook',function(req, res){
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
    }
    var body = {
        replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
        messages: [{
            type: 'text',
            text: 'こんにちは'
        }]
    }
    var url = 'https://api.line.me/v2/bot/message/reply';
    request({
        url: url,
        method: 'POST',
        headers: headers,
        body: body,
        json: true
    });
    res.status(200).end();
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));