// userModel.js
const bcrypt = require('bcrypt');
var saltRounds = 10;
var mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
// Setup schema
var userSchema = mongoSchema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});
var user = mongoose.model('user', userSchema);
function userModel() { }
function hash(password) {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

userModel.prototype.registration = (body, callback) => {
    user.find({
        "email": body.email
    }, (err, data) => {
        if (err) {
            console.log("Error in Registration");
            callback("User Already Present")
        }
        else if (data.length > 0) {
            console.log("Email already Exists.");
            callback("Email already Exists")
        }
        else {
            const newUser = new user({
                "name": body.name,
                "email": body.email,
                "password": hash(body.password)
            });

            newUser.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    callback(err);
                } else {
                    console.log("Registered Successfully");
                    callback(null, result)
                }
            })
        }
    });
}
userModel.prototype.login = (body, callback) => {
    user.findOne(
        {
            "email": body.email
        }, (err, data) => {
            if (err) {
                callback(err);
            } else if (data != null) {
                bcrypt.compare(body.password, data.password).then(function (res) {
                    if (res) {
                        callback(null);
                    }
                    else {
                        console.log("Incorrect password");
                    }
                });
            }
        });
}
userModel.prototype.forgotPassword = (body, callback) => {
    user.findOne(
        {
            "email": body.email
        }, (err, data) => {
            if (err) {
                callback(err);
            } else if (data != null) {
                bcrypt.compare(body.password, data.password).then(function (res) {
                    if (res) {
                        callback(null);
                    }
                    else {
                        console.log("Incorrect password");
                    }
                });
            }
        });
}
module.exports = new userModel();
