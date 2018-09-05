let express = require('express');

let http = require('http');

var app = express();

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

let PORT = process.env.PORT || 80;

app.get('/webhook',function(req, res){
    res.send('aaa');
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));