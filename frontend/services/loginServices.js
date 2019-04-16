app.service('loginServices', function ($http, $location) {
    
    this.login = function (data, $scope) {
        //console.log('rcb');
        $http({
            method: 'POST',
            url: 'http://localhost:8080/login',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("Login successfull ");
                //console.log(response);
                var userid = response.data.message[0]._id;
                //console.log(userid);
                var name = response.data.message[0].name;
                //console.log(name);
                var token = response.data.token;
                //console.log(token);
                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token",token);
                $location.path('dashboard');
                $scope.loginMessage = "login successfull";
            },
            function errorCallback(response) {
                console.log(response);
                $scope.loginMessage = 'Email Id or Password Incorrect ';
            }
        );
    }
});