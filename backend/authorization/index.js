// importing express
var express = require('express');
var router = express.Router();
var users = require('../controller/userController');
//var auth = require('../middleware/authentication');
try{
    router.get('/getAllUsers',users.getAllUsers);
}
catch(err)
{
    console.log("err found while receving token - authorization.js");
}

module.exports =router