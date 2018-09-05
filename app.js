let express = require('express');

let http = require('http');

var app = express();

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

let PORT = process.env.PORT || 80;

app.get('/webhook',function(req, res){
    // res.send('aaa');
    // res.sendStatus(200);
    res.writeHead(200, {'Content-Type': 'text/plain'});
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));