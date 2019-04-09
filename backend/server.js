// FileName: server.js
// Import express
let express = require('express')
let app = express();
let http=require('http');
// let jwt=require('jsonwebtoken')
// let async=require('async');
// let nodemailer=require('nodemailer');
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
var server = app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
//calling router
app.use('/', route);
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
app.use(express.static('frontend'));
app.use(express.static('../frontend'));
var socketIO = require('socket.io');
// const server = http.createServer(app);
const io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log("Connected socket!");
  //started listening events. socket.on waits for the event. whenever that event is triggered the callback
  //function is called.
      // socket emmits disconnect event which will be called whenever client disconnected.
      socket.on('disconnect', function () {
          console.log("Socket Disconnected!")
      });
  });

