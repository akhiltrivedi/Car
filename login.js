angular.module('myApp', [])
    .controller('loginctrl',function($scope) {

        $scope.obj = JSON.parse(localStorage.getItem('person'));

        $scope.email = $scope.obj.map(function (user) {
            return user.email;
        });

        $scope.name = $scope.obj.map(function (user) {
            return user.name;
        });

        $scope.pass = $scope.obj.map(function (user) {
            return user.pass;
        });

        $scope.check = function()
        {
            $scope.userName = document.myForm.email.value;
            $scope.userPw = document.myForm.pass.value;

            $scope.i;
            $scope.count = 0;
            for ($scope.i = 0; $scope.i < $scope.email.length; $scope.i++) {
                if($scope.email[$scope.i] == $scope.userName && $scope.pass[$scope.i] == $scope.userPw)
                {
                    $scope.count++;
                }
            }
            if($scope.count == 1)
            {
                window.location = "search.html";
                alert("Welcome"+' '+$scope.userName);
            }
            else
            {
                alert("Check Your credentials !!!");
                location.reload();
            }
        }
    });