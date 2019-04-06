var app = angular.module('chatapp','ui.router');

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/loginPage.html',
        controller: 'controlLogin'

    })

    $stateProvider.state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPass.html',
        controller: 'controlForgotPassword'

    })

    $stateProvider.state('resetPassword', {
        url: '/resetPassword',
        templateUrl: 'templates/resetPass.html',
        controller: 'controlRestPassword'

    })

    .state('register',{
        url: '/register',
        templateUrl: 'templates/registration.html',
        controller: 'controlRegister'
    })

    $urlRouterProvider.otherwise('login');

    
});
