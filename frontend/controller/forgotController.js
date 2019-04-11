app.controller('forgotController', function ($scope, forgotServices) {

    $scope.forgotPassword = function () {
        var data = {
            'email': $scope.email,
        }
        forgotServices.forgotPassword(data, $scope);
    }
});

