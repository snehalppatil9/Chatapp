var userService = require('../services/userServices');
var jwt = require('jsonwebtoken')
var sendMail=require('../middleware/sendMail')
exports.registration = (req, res) => {
    var responseResult = {};
    userService.registration(req.body, (err, result) => {
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
    var responseResult = {};
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
            const options = { expiresIn: '2d'}
            var token = jwt.sign((payload), 'secretKey' , options);
           // console.log(token);
            var url = `localhost:8080/resetPassword =>${token}`;
            // console.log(url);
            // console.log("Snehal")
            sendMail.sendMail(url);
            res.status(200).send({
                
              // message:data,
                "token":token,
                "url": url
                
            });

        }
    })
}
exports.resetPassword = (req, res) => {
    // console.log("control",req);
    var responseResult = {};
    userService.resetPassword(req.body, (err, data) => {
        if (err) {
            // console.log("dgsdefdes");
            responseResult.status = false;
            responseResult.errors = err;
            return res.status(400).send(responseResult);
        } else {
            responseResult.status = true;
            responseResult.result = data;
            responseResult.message="reset Passsword sucessfully."
            return res.status(200).send(responseResult);
        }
    })
}
