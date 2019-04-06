// userModel.js

var mongoose = require('mongoose');
var mongoSchema=mongoose.Schema;
// Setup schema
var userSchema =mongoSchema({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    email: {
        type: String,
        required: [true,"Email is required"]
    },
    password: {
        type: String,
        required: [true,"Password is required"]
     }
    },
    {
        timestamps: true
    // create_date: {
    //     type: Date,
    //     default: Date.now
    // }
});
var register = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    register.find(callback).limit(limit);
    login.find(callback).limit(limit);
    forgotPassword.find(callback).limit(limit);
    resetPassword.find(callback).limit(limit);
}



// function userModel(){
    
// }
// // Export Login model
// var user =mongoose.model('user', userSchema);

// userModel.prototype.register = (body, callback) => {
//     const newUser = new user({
//         "name": body.name,
//         "email": body.email,
//         "password": body.password
//     });
//     newUser.save((err, result) => {
//         if (err) {
//             console.log("error in model file", err);
//             return callback(err);
//         } else {
//             console.log("Data saved successfully...!", result);
//             return callback(null, result);
//         }
//     });
// }

// userModel.prototype.login = (body, callback) => {
//     user.find({ "email": body.email }, (err, data) => {
//         if (err) {
//             return callback(err);
//         } else if (data.length > 0) {
//             compare(body.password, data[0].password, function (err, res) {
//                 if (err) {
//                     return callback(err);
//                 } else if (res) {
//                     console.log(data);
//                     return callback(null, data);
//                 } else {
//                     return callback("Incorrect password").status(500);
//                 }
//             });
//         } else {
//             return callback("Invalid User ");
//         }
//     });
// }

// userModel.prototype.forgotPassword = (body, callback) => {
//     user.find({ "email": body.email }, (err, data) => {
//         if (err) {
//             return callback(err);
//         } else if (data) {
//             console.log("Data in models==>", data[0]._id);
//             return callback(null, data)
//         }
//         else {
//             return callback("Invalid User ");
//         }
//     });
// }

// userModel.prototype.resetPassword = (body, callback) => {
//     user.find({ 'email': body.email }, (err, data) => {
//         if (err) {
//             console.log("Error");
//             return callback(err);
//         } else if (data.length > 0) {
//             response = { "error": true, "message": "Email already exists ", "errorCode": 404 };
//             return callback(response);
//         }
//         else {
//             const newUser = new user({
//                 "name": body.name,
//                 "email": body.email,
//                 "password": body.password
//             });
//             newUser.save((err, result) => {
//                 if (err) {
//                     console.log("error in model file", err);
//                     return callback(err);
//                 } else {
//                     console.log("Data saved successfully...!", result);
//                     return callback(null, result);
//                 }
//             });
//         }
//     });

// }

// module.exports = new userModel();
