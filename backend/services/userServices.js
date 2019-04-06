var userModel = require('../models/userModel');

exports.register = (req, callback) => {
    userModel.register(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

exports.login = (req, callback) => {
    userModel.login(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

exports.forgotPassword = (req, callback) =>{
    userModel.login(req, (err, data) =>{
        if(err){
            return callback(err);
        }else{
            return callback(null, data);
        }
    })
}

exports.resetPassword = (req, callback) => {
    userModel.resetPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}