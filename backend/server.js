// FileName: server.js
// Import express
//express is a web frame for node js
const express = require('express')
const app = express();
// Import http
const http = require('http');
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
var server = app.listen(port, () => {
  console.log("Running RestHub on port " + port);
});
var chatController = require('../backend/controller/chatController');
app.use(express.static('../frontend'));
const io = require('socket.io')(server);
//checking for events. connecton will be listening for incoming sockets.
io.on('connection', function (socket) {
  console.log("socket is connected ");
  //started listening events. socket.on waits for the event. whenever that event is triggered the callback
  //function is called.
  socket.on('createMessage', function (message) {
    //saving message to db
    chatController.message(message, (err, data) => {
      if (err) {
        console.log("Error:in message", err);
      }
      else {
        console.log(message + 'in server');
        //io.emmit is used to emit the message to all sockets connected to it.
        io.emit('newMessageSingle', message);
        io.emit(data.receiverUserId,data)
        //console.log(data.receiverUserId);
        io.emit(data.senderUserId,data)    
      }
    });
    // socket emmits disconnect event which will be called whenever client disconnected.
    socket.on('disconnect', function () {
      console.log('socket is disconnect');
    });
  });
});



// connections = [];
// const io = require('socket.io').listen(server)
// io.sockets.on("connection", function (socket) {
//     console.log("hai io connected");
//     connections.push(socket)
//     console.log("user connected");


//     socket.on('createMessage', function (req) {
//       chatController.message(req, (err, result) => {
//             if (err) {
//                 console.log("error on server while receiving data");
//             }
//             else {
//                 console.log("result===============>",result);
                
//                 socket.emit('newMessageSingle', result);
//             }
//             // io.emit("emitMsg",req.receiverId,req)
//             // io.emit(req.senderId,req)    
//         })
//     })
// })
// /**
//  * Disconnect
//  */
// io.on("disconnect", function (data) {
//     connections.splice(connections.indexOf(socket), 1)
//     console.log("user Disconnected");

// })


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
})