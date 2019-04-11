//console.log("gbrtyrvg56fthyfrgbthyrftgdgy");

app.controller('loginController', function ($scope, loginServices) {
    //console.log('csk');
    
    $scope.login = function () {
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        loginServices.login(data, $scope);
    }
});

//console.log('csk');