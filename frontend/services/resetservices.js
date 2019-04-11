app.service('resetservices', function ($http) {
    this.resetPassword = function (data, $scope) {
       // console.log("data on service register ", data);
       $http({
            method: 'POST',
            url: 'http://localhost:8080/resetPassword',
            data: data
        }).then(
            function successCallback(response) {
                console.log("reset password successfull ");
                console.log(response);
                $scope.message = "reset password successfull";
            },
            function errorCallback(response) {
             console.log("reset password Unsuccessfull ");
             $scope.message =response.data.message.message;
            }
        );
    }
});