app.controller('resetController', function ($scope, resetservices) {

    // for registration form
    $scope.resetPassword = function () {
        var user = {
            'password': $scope.password,
            'cpassword': $scope.cpassword
        }

        console.log("register calling", user);
        if ($scope.password != $scope.cpassword) {
            $scope.message = "password and confirm password not match.....please try again...";
        } else {
            resetservices.resetPassword(user, $scope);
        }
    }
});