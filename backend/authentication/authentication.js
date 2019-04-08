var jwt = require('jwt-simple');
function auth(){
var payload = { userId: 1 }; 
var secret='snehal';
var token = jwt.encode(payload, secret);
//console.log(token);
}
module.exports={
    auth
}