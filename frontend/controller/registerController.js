app.controller('registerController', function ($scope, registerServices ) {

    // for registration form
    $scope.register = function () {
        var user = {
            'name': $scope.name,
            'email': $scope.email,
            'password': $scope.password,
            'confirmPassword': $scope.confirmPassword
        }

        console.log("register calling", user);
        if ($scope.password != $scope.confirmPassword) {
            $scope.message = "password and confirm password not match.....please try again...";
        } else {
            registerServices.registerUser(user, $scope);
        }
    }
});