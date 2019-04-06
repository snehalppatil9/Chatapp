var userService = require('../services/userServices');

// module.exports.register = (req, res) => {
//     req.checkBody('name', 'name is not valid').notEmpty();
//     req.checkBody('email', 'Email is not valid').notEmpty();
//     req.checkBody('password', 'password is not valid').notEmpty();

//     var errors = req.validationErrors();
//     console.log(errors);

//     if (errors) {
//         response.success = false;
//         response.error = errors;
//         return res.status(422).send(response);
//     }
//     else {
//         userService.register(req.body, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send({
//                     message: err
//                 })
//             } else {
//                 return res.status(200).send({
//                     message: data
//                 });
//             }
//         });
//     }
// };

// module.exports.login = (req, res) => {
//     req.checkBody('email', 'Email is not valid').notEmpty();
//     req.checkBody('password', 'password is not valid').notEmpty();
    
//     var errors = req.validationErrors();
//     console.log(errors);

//     if (errors) {
//         response.success = false;
//         response.error = errors;
//         return res.status(422).send(response);
//     }
//     else {
//         userService.login(req.body, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send({
//                     message: err
//                 })
//             } else {
//                 return res.status(200).send({
//                     message: data
//                 });
//             }
//         });
//     }
// };

// module.exports.forgotPassword = (req, res) => {
//     req.checkBody('email', 'Email is not valid').isEmail();
//     var errors = req.validationErrors();
//     var response = {};
//     if (errors) {
//         response.success = false;
//         response.error = errors;
//         return res.status(422).send(response);
//     } else {
//         userService.forgotPassword(req.body, (err, data) => {
//             var responses = {};
//             if (err) {
//                 return res.status(500).send({
//                     message: err
//                 });
//             } else {
//                 responses.success = true;
//                 responses.result = data;
//                 console.log(" Data in file =>", data[0]._id);
//             }
//         })
//     }
// }

// module.exports.resetPassword = (req, res) =>{
//     req.checkBody('password', 'password is not valid').notEmpty().equals(req.body.confirmPassword);
//     var errors = req.validationErrors();
//     var response = {};
//     if (errors) {
//         response.success = false;
//         response.error = errors;
//         return res.status(422).send(response);
//     } else {
//         userService.resetPassword(req.body, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send({
//                     message: err
//                 })
//             } else {
//                 return res.status(200).send({
//                     message: data
//                 });
//             }
//         });
//     }
// }



// contactController.js

// Import contact model
User = require('../models/userModel');

// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, register) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "registered successfully",
            data: register
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var register = new User();
    register.name = req.body.name ? req.body.name : register.name;
    register.email = req.body.email;
    register.password = req.body.password;

// save the contact and check for errors
    register.save(function (err) {
        // if (err)
        //     res.json(err);

    res.json({ 
            message: 'Registered record',
            data: register
        });
    });
};

// Handle view contact info
exports.register = function (req, res) {
        req.checkBody('name', 'name is not valid').notEmpty();
        req.checkBody('email', 'Email is not valid').notEmpty();
        req.checkBody('password', 'password is not valid').notEmpty();
    
        var errors = req.validationErrors();
        console.log(errors);
    
        if (errors) {
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        }
        else {
            userService.register(req.body, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    })
                } else {
                    return res.status(200).send({
                        message: data
                    });
                }
            });
        }
    };
    

// // Handle update contact info
// exports.update = function (req, res) {

// Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);

// contact.name = req.body.name ? req.body.name : contact.name;
//         contact.gender = req.body.gender;
//         contact.email = req.body.email;
//         contact.phone = req.body.phone;

// // save the contact and check for errors
//         contact.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: contact
//             });
//         });
//     });
// };

// // Handle delete contact
// exports.delete = function (req, res) {
//     Contact.remove({
//         _id: req.params.contact_id
//     }, function (err, contact) {
//         if (err)
//             res.send(err);

// res.json({
//             status: "success",
//             message: 'Contact deleted'
//         });
//     });
// };