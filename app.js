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
    for (var event of req.body.events){
        if (event.type == 'message' && event.message.text == 'ハロー'){
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
            }
            var body = {
                replyToken: event.replyToken,
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
        }
    }
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));