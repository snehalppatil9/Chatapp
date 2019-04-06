/**
 * @Purpose : Create a router.js file to store all routes
 */ 
const ctr1User = require('../controller/controller')
const express = require('express');

const router = express.Router();
// Registration
router.post('/register', ctr1User.register);
// Login
router.post('/login', ctr1User.login)
// Forgot Password
router.post('/forgotPassword', ctr1User.forgotPassword);
// ResetPassword
router.post('/resetPassword', ctr1User.resetPassword);
module.exports = router;