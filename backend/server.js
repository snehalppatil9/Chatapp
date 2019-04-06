// FileName: server.js
// Import express
let express = require('express')
let app = express();
// Import Body parser
let bodyParser = require('body-parser');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var expressValidator = require('express-validator')
app.use(expressValidator());

// Import Mongoose
const mongoose = require('mongoose');
const route = require('../backend/api-routes');
// Setup server port
var port = process.env.PORT || 8080;
// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
//calling router
app.use('/', route);
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

//import database config
const  mdbConfig = require('./config/database.js');
//connection to database
mongoose.connect(mdbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to database...!");
}).catch(err => {
    console.log("Could not connect to the database....!");
    process.exit();
});


