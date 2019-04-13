// FileName: server.js
// Import express
//express is a web frame for node js
const express = require('express')
const SocketIo = require('socket.io')
const app = express();
// Import http
const http = require('http');
var server = http.createServer(app);
// Import Body parser
let bodyParser = require('body-parser');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
//bodyParser.json() throws syntax error on invalid json
app.use(bodyParser.json());
//import express validator
var expressValidator = require('express-validator')
//calling express validator
app.use(expressValidator());
// Import Mongoose
const mongoose = require('mongoose');
const route = require('../backend/api-routes');
// Setup server port
var port = process.env.PORT || 8080;
// Launch app to listen to specified port
app.listen(port, () => {
  console.log("Running RestHub on port " + port);
});
const io = SocketIo(server);
//console.log("aaaaaaaaaaaaa");
//checking for events. connecton will be listening for incoming sockets.
io.on('connection', function (socket) {
  //console.log("ttutuittu");

  console.log("Socket Connected Sucessful!");
  // socket emmits disconnect event which will be called whenever client disconnected.
  socket.on('disconnect', function () {
    console.log("Socket Disconnected!")
  });
});
//calling router
app.use('/', route);
app.use(express.static('../frontend'));
//import database config
const mdbConfig = require('./config/database.js');
//connection to database
mongoose.connect(mdbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to database...!");
}).catch(err => {
  console.log("Could not connect to the database....!");
  process.exit();
});






