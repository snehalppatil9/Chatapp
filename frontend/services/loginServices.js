app.service('loginServices', function ($http, $location) {
    
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
                $location.path('dashboard');
                $scope.loginMessage = "login successfull";
            },
            function errorCallback(response) {
                console.log(response);
                $scope.loginMessage = 'Email Id or Password Incorrect ';
            }
        );
    }
});