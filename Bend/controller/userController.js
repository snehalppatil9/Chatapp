var userService = require('../services/userService');
var jwt = require('jsonwebtoken')
exports.forgotPassword = (req, res) => {
    req.checkBody('email', 'Email is not valid').isEmail();
    var secret = "adcgfft";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        userService.forgotPassword(req.body, (err, data) => {
            var responses = {};

            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                responses.success = true;
                responses.result = data;

                console.log("data in controller========>", data[0]._id);


                const payload = {
                    user_id: data[0]._id
                }
                //  console.log(payload);
                const obj = gentoken.GenerateToken(payload);
                const url = `http://localhost:3000/resetPassword/${obj.token}`;
                console.log("url in controller", url);

                sendmail.sendEMailFunction(url);

                res.status(200).send(url);



            }
        })
    }
}
