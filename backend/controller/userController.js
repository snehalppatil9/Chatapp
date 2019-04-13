var userService = require('../services/userServices');
var jwt = require('jsonwebtoken')
var sendMail = require('../middleware/sendMail')
exports.register = (req, res) => {
    try {
        //check vadiation of data
        req.checkBody('name', 'Name is not valid').isLength({ min: 3 }).isAlpha();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is not valid').isLength({ min: 8 }).equals(req.body.cpassword);
        var errors = req.validationErrors();
        var responseResult = {};
        // any error occurs in validation it goes to if condition
        if (errors) {
            console.log("err in controller");
            
            responseResult.status = false;
            responseResult.message = errors;
            res.status(422).send(responseResult);
        }
        else {
            console.log("else in controller");
            var responseResult = {};
            // here sending a request in services
            userService.register(req.body, (err, result) => {
                if (err) {
                    responseResult.success = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.success = true;
                    responseResult.result = result;
                    responseResult.message = "Registration Successfull"
                    res.status(200).send(responseResult.message);
                }
            })
        }
    }
    catch (err) {
        console.log(err);

    }
}
exports.login = (req, res) => {
    var responseResult = {};
    userService.login(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult);
        }
        else {
            responseResult.success = true;
            responseResult.result = result;
            responseResult.message = "Login Sucessufully"
            res.status(200).send(responseResult);
        }
    })
}
exports.forgotPassword = (req, res) => {
    try {
        req.checkBody('email', 'Email is not valid').isEmail();
        var errors = req.validationErrors();
        var responseResult = {};
        //if there  a wrong validation then error
        if (errors) {
            responseResult.status = false;
            responseResult.message = errors;
            res.status(404).send(responseResult);

        }
        else {
            userService.forgotPassword(req.body, (err, data) => {
                if (err) {
                    console.log(err)
                    responseResult.status = false;
                    responseResult.errors = err;
                    return res.status(400).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.result = data;
                    var payload = {
                        email: req.body.email
                    }
                    //console.log("Payload", payload);
                    //console.log("hahahahhahahahahahahahahahahahahahahaha")
                    const options = { expiresIn: '2d' }
                    var token = jwt.sign((payload), 'secretKey', options);
                    // console.log(token);
                    var url = `http://localhost:8080/#!resetPassword/${token}`;
                    // console.log(url);
                    // console.log("Snehal")
                    sendMail.sendMail(url);
                    res.status(200).send({
                        // message:data,
                        "token": token,
                        "url": url

                    });

                }
            })
        }
    }
    catch (err) {
        console.log(err);

    }
}
// exports.resetPassword = (req, res) => {
//     try {
//         req.checkBody('password', 'Password is not valid').isLength({ min: 8 }).equals(req.body.cpassword);
//         var errors = req.validationErrors();
//         var responseResult = {};
//         if (errors) {

//             responseResult.status = false;
//             responseResult.message = errors;
//             res.status(422).send(responseResult);
//         }
//         else {
//             // console.log("control",req);
//             userService.resetPassword(req.body, (err, data) => {
//                 if (err) {
//                     // console.log("dgsdefdes");
//                     responseResult.status = false;
//                     responseResult.errors = err;
//                     return res.status(400).send(responseResult);
//                 } else {
//                     responseResult.status = true;
//                     responseResult.result = data;
//                     responseResult.message = "reset Passsword sucessfully."
//                     return res.status(200).send(responseResult);
//                 }
//             })
//         }
//     } catch (err) {
//         console.log(err);

//     }
// }

exports.resetPassword = (req, res) => {
    var responseResult = {};
    userService.resetPassword(req, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            console.log('in user ctrl token is verified giving response');
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}
