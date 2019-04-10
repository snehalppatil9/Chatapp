app.service('loginServices', function ($http, $location) {


    this.login = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:8080/login',
            data: data,
        })
    }

});