app.service('chatServices', function ($http) {
    try {
        this.getAllUSers = function ($scope) {
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:8080/getAllUsers',
                }).then(
                function successCallback(response) {//call back function of http sevice
                    $scope.allUser = response.data.result;
                    // console.log('assdfjhjsdfjkkj');
                    
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