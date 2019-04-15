app.controller('resetController', function ($scope, resetservices) {

    // for registration form
    $scope.resetPassword = function () {
        var user = {
            'password': $scope.password,
            'cpassword': $scope.cpassword
        }
        //validation for password
        var passw = /^[A-Za-z]\w{7,14}$/;
        if (passw.test($scope.password) == false) {
            alert('Wrong.....try again!')
            return false;
        }
        //validation for confirm password
        var cpassw = /^[A-Za-z]\w{7,14}$/;
        if (cpassw.test($scope.cpassword) == false) {
            alert('Wrong.....try again!')
            return false;
        }
        // console.log("register calling", user);
        //it checks password and confirm password matching or not
        if ($scope.password != $scope.cpassword) {
            $scope.message = "password and confirm password not match.....please try again...";
        } else {
            resetservices.resetPassword(user, $scope);
        }
    }
});