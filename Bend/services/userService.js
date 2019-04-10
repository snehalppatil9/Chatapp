var userModel = require('../modules/userModel');
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