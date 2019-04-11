app.service('loginServices', function ($http) {
    
    this.login = function (data, $scope) {
        //console.log('rcb');
        $http({
            method: 'POST',
            url: 'http://localhost:8080/login',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("Login successfull ");
                console.log(response);
                $scope.loginMessage = "login successfull";
            },
            function errorCallback(response) {
                console.log(response);
                $scope.loginMessage = 'Email Id or Password Incorrect ';
            }
        );
    }
});