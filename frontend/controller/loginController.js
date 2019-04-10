app.controller('loginController', function ($scope, loginServices) {

    $scope.login = function () {
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        loginServices.login(data, $scope);
    }
});