app.service('chatServices', function ($http) {
    try {
        this.getAllUsers = function ($scope) {
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:8080/getAllUsers',
                // headers: {
                //     'token': usertoken,
                // }
            }).then(
                function successCallback(response) {//call back function of http sevice
                    $scope.allUser = response.data.result;
                    console.log(response.data.result);     
                },
                function errorCallback(response) {
                    console.log("register Unsuccessfull ");
                    console.log(response);
                }
            );
        }
    }
    catch (err) {
        console.log("error found here in getting users")
    }
})