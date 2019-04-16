app.controller('chatController', function ($scope, SocketService, $state, chatServices) {
    //console.log("sdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj");
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    //console.log($scope.currUserName);
    $scope.currUser = localStorage.getItem('userid');
    var token = localStorage.getItem("token");
    //console.log("miiiiiiiiiii");
    //  console.log(token);
    if (token === null) {//if the token is null then go to login page
        $state.go('login');
    }
    $scope.getAllUsers = function () {
        chatServices.getAllUsers($scope);
    }
    $scope.getAllUsers();
    $scope.chatList = function (userData) {//select person from list
       //console.log("safffffffffff");
        $scope.allUserArr = '';
        localStorage.setItem('name', userData.name);//getting data from localstorage
        localStorage.setItem('userId', userData._id);
       
    }
});