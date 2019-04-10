// userModel.js
const bcrypt = require('bcrypt');
var saltRounds = 10;
var mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
// Setup schema
var userSchema = mongoSchema({
    name: {
        type: String,
        unique: true,
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

userModel.prototype.forgotPassword = (body, callback) => {
    user.findOne({ "email": body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data) {
            return callback(null, data);
        }
        else {
            return callback("Incorrect email");
        }
    });
}