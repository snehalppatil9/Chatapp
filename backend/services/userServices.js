var userModel = require('../models/userModel');
exports.registration = (data, callback) => {
    userModel.registration(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        }
        else {
            console.log("In service", result);
            callback(null, result);
        }
    })
}
exports.login = (req, callback) => {
    //console.log("login service",req);
    userModel.login(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}
exports.forgotPassword = (req, callback) => {
    //console.log("forgot service",req);
    userModel.forgotPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}
exports.resetPassword = (req, callback) => {
    // console.log("reset services",req);
    userModel.resetPassword(req, (err, result) => {
        if (err) {
            return callback(err);
        } else {
            console.log("result in controler== ",result)
            return callback(null, result);
        }
    })
}
