const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
var clientPath = path.join(__dirname, '/../','client')
console.log(clientPath);

var app = express()
var httpServer = http.createServer(app)

var io = socketIO(httpServer);
const port = process.env.PORT || 3002;

app.use(express.static(clientPath));

io.on('connection', function (socket) {
  console.log('New user connected')

})

httpServer.listen(port, function () {
  console.log('server is listening at:', port)  
})