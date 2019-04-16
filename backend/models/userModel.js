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

userModel.prototype.register = (body, callback) => {
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
                    callback(err,result);
                } else {
                    console.log("Registered Successfully");
                    callback(null, result)
                }
            })
        }
    });
}
userModel.prototype.login = (body, callback) => {
    user.find({ "email": body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data.length > 0) {
            bcrypt.compare(body.password, data[0].password, function (err, res) {
                if (err) {
                    return callback(err);
                } else if (res) {
                    console.log(data);

                    return callback(null, data);
                } else {
                    return callback("Incorrect password").status(500);
                }
            });
        } else {
            return callback("Invalid User ");
        }
    });
}
userModel.prototype.getAllUsers = (req,callback) => {
    user.find({}, (err, data)=>{
       if(err){
           callback("error is in model" + err)
       }else{
           callback(null , data);
       }
    })
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
userModel.prototype.resetPassword = (body, callback) => {
    var pass = hash(body.password);
    console.log(pass);
    user.updateOne({},{ password: pass }, (err, result) => {
        if (err) {
           return callback(err);
        } else {
             //console.log("update password==",user.password)
                console.log("Password Reseted Successfully....");
            callback(null, result);
            }
        })
    }
module.exports = new userModel();