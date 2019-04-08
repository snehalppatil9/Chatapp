var userService = require('../services/userServices');
var authentication=require('../authentication/authentication');
//var jwt=require('jsonwebtoken');
exports.registration=(req,res)=>{
    var responseResult={};
    userService.registration(req.body,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            responseResult.message="Registration Successfull"
            res.status(200).send(responseResult.message);
        }
    })
}
exports.login=(req,res)=>{
    var responseResult={};
    userService.login(req.body,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}
exports.forgotPassword=(req,res)=>{
    var responseResult={};
    userService.forgotPassword(req.body,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            let token=authentication.auth();
            console.log(token);
            res.status(200).send(responseResult);
        }
    });
    
  
}
exports.resetPassword=(req,res)=>{
    var responseResult={};
    userService.resetPassword(req.body,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}