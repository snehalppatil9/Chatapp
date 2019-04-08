var userModel = require('../models/userModel')
exports.registration=(data,callback)=>{
    userModel.registration(data,(err,result)=>{
        if(err)
        {
            console.log("service error");
            callback(err);        
        }
        else
        {
            console.log("In service",result);
            callback(null,result);
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
    userModel.forgotPassword(req, (err, data) =>{
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