// importing express
var express = require('express');
var router = express.Router();
const chatController=require('../controller/chatController')
var users = require('../controller/userController');
//var auth = require('../middleware/authentication');
try{
    router.get('/getAllUsers',users.getAllUsers);
    router.get('/getUserMsg', chatController.getUserMsg);
}
catch(err)
{
    console.log("err found while receving token - authorization.js");
}

module.exports =router