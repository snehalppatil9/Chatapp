app.service('registerServices', function ($http) {
    this.register = function (data, $scope) {
        console.log("data on service register ", data); 
        $http({
            method: 'POST',
            url: 'http://localhost:8080/register',
            data: data

        }).then(
            function successCallback(response) {
                //console.log("MI");    
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull"; 
            },
            function errorCallback(response) {
             console.log("register Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
    }
});