app.controller('chatController', function ($scope, SocketService, $state, chatServices) {
     //console.log("sdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj");
     $scope.message = '';
     $scope.allUserArr = [];
     $scope.currUserName = localStorage.getItem('name');
     //console.log($scope.currUserName);
     $scope.currUser = localStorage.getItem('userid');
     $scope.recieverUserName = localStorage.getItem('rusername');
     //console.log($scope.recieverUserName);
     var token = localStorage.getItem("token");
     //console.log("miiiiiiiiiii");
     //  console.log(token);
    if (token === null) {//if the token is null then go to login page
         $state.go('login');
     }
    try {
        SocketService.on('newMessageSingle', (message) => {//listening to the evnts
            if (localStorage.getItem('userid') == message.senderUserId || (localStorage.getItem('userid') == message.recieverUserId && localStorage.getItem('ruserId') == message.senderUserId)) {
                if ($scope.allUserArr === undefined) {
                    $scope.allUserArr = message;//assighning message to variable
                } else {
                    $scope.allUserArr.push(message);
                    console.log(message);
                    console.log($scope.allUserArr);
                    
                }
            }
        })
    }
    catch (err) {
        console.log("error in finding message")
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
        $scope.recieverUserName = localStorage.getItem('rusername');
        $scope.getUserMsg();
    }
    //get all message
    $scope.getUserMsg = function () {
        console.log("i am called");
        chatServices.getUserMsg($scope);
    }
    $scope.getUserMsg();
    try {
        $scope.sendmessage = function () {//send message function
            var msg = {
                'senderUserId': localStorage.getItem('userid'),
                'senderName': localStorage.getItem('name'),
                'recieverUserId': localStorage.getItem('ruserId'),
                'recieverName': localStorage.getItem('rusername'),
                'message': $scope.message
            };
            $scope.message = '';
          //  console.log("Message send...............");
            
            SocketService.emit('createMessage', msg);//emittin the message to the browser
        }
    }
    catch (err) {
        console.log("error in sending message to the reciever")
    }

    try {
        $scope.logout = function () {
            localStorage.clear();
            $state.go('login')//return back to login page
        }
    }
    catch (err) {
        console.log("error in logging out")
    }
});