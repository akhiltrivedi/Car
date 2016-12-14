var app = angular.module('myApp',[]);
app.controller('searchctrl',function($scope,$http)
{
    localStorage["data"] =  localStorage.getItem('person');

    $scope.obj = JSON.parse(localStorage["data"]);
    $scope.names = $scope.obj.map(function (user)
    {
        return user.name;
    });

    $scope.availableTags =  $scope.names ;

    $scope.complete=function()
    {
        console.log($scope.availableTags);
        $( "#tags" ).autocomplete({
            source: $scope.availableTags
        });
    };
    function view()
    {

        $scope.$header = $("<br><br><br><br><br><br><h2 align='center' id='tab'>Edit User Details</h2><br>");
        $scope.data = JSON.parse(localStorage.getItem('person'));
        $scope.myObject = $scope.data.filter(function (person)
            {
                return person.name ==
            }
        );
        $scope.$div1 =  $("<div id='two'></div><br>" );
        for ( $scope.i = 0; $scope.i < $scope.myObject.length; $scope.i++ )
        {
            $scope.emp = $scope.myObject[$scope.i];
            $scope.$line2 = $("<form></form>");
            $scope.$line2.append( $("<input type='checkbox' class='checkbox'><label>Member ?</label><br><br>").val($scope.emp.member));
            $scope.$line2.append($("<input  type='text' class='form-control' ng-model='DefaultCtrl.user.fname'><br><br>").val($scope.emp.name));
            $scope.$line2.append($("<input  type='email' class='form-control'><br><br>").val($scope.emp.email));
            $scope.$line2.append($("<input  type='tel' id='phone' class='form-control'><br><br>").val($scope.emp.mobile));
            $scope.$line2.append($("<input type='submit' value='Update' id='update'>"));$scope.$div1.append($scope.$header);
            $scope.$div1.append($scope.$line2);

        }
        $scope.$div1.appendTo(document.body);
    };

    )];