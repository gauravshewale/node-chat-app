const path = require('path');
const express = require('express');
var clientPath = path.join(__dirname, '/../','client')
console.log(clientPath);

var app = express()
app.use(express.static(clientPath));
const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log('server is listening at:', port)  
})