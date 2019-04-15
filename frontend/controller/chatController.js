app.controller('chatController', function ($scope, SocketService, $state, chatServices) {
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    //var token = localStorage.getItem("token");
    $scope.getAllUSers = function () {
        chatServices.getAllUSers($scope);
    }
    $scope.getAllUSers();
    $scope.chatList = function (userData) {//select person from list
        $scope.allUserArr = '';
        localStorage.setItem('name', userData.name);//getting data from localstorage
        localStorage.setItem('userId', userData._id);
       
    }
});