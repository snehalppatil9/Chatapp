app.service('forgotServices', function ($http) {
    this.forgotPassword = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:8080/forgotPassword',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("forgotPassword successfull ");
                console.log(response);
                $scope.loginMessage = "login successfull";
              
            },
            function errorCallback(response) {
                console.log("register Unsuccessfull ");
                console.log(response);
                $scope.loginMessage = 'Email Id Incorrect ';
            }
        );
    }

});