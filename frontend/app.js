var app = angular.module('chatApp',['ui.router','btford.socket-io']);
app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/loginPage.html',
        controller: 'loginController'

    })

    $stateProvider.state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPass.html',
        controller: 'forgotController'

    })

    $stateProvider.state('resetPassword', {
        url: '/resetPassword',
        templateUrl: 'templates/resetPass.html',
        controller: 'resetController'

    })

    .state('register',{
        url: '/register',
        templateUrl: 'templates/registration.html',
        controller: 'registerController'
    })

    $urlRouterProvider.otherwise('login'); 
});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory){
    return socketFactory({
        ioSocket: io.connect('http://localhost:8080')  //connecting socket io
    })
}])