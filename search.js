var app = angular.module('myApp',[]);
app.controller('searchctrl',function($scope)
{
    $scope.obj = JSON.parse(localStorage.getItem('person'));

    $scope.names = $scope.obj.map(function (user)
    {
        return user.name;
    });

    $scope.complete=function()
    {
        $(".auto").autocomplete({
            source:$scope.names,
            response: function(event, ui) {
                if (ui.content.length === 0)
                {
                    $("#empty-message").text('No Result Found !! Try again');
                }
                else
                {
                    $("#empty-message").empty();
                }
            }
        });
    };

    $scope.check=function()
    {
        //location.reload();
        $scope.data = JSON.parse(localStorage.getItem('person'));
        $scope.tb = document.myForm.tags.value;
        $scope.myObject = $scope.data.filter(function (person) {
                return person.name == $scope.tb;
            }
        );

        $scope.$div = $("<div id='one' class='col-md-7 col-md-offset-3'></div><br>");
        $scope.$header = $("<h2 align='center' id='tab'>User Details</h2><br>");

        $scope.$break = $("<br><br><br><br><br><br>");
        //$scope.$line1.append( $( "<td></td>" ).html('<b>Cars</b>' ) );

        for ($scope.i = 0; $scope.i < $scope.myObject.length; $scope.i++)
        {
            $scope.$data = $scope.myObject[$scope.i];
            {
                $scope.$line = $("<form></form><br>");
                $scope.$line.append($("<input  type='text' class='form-control' disabled><br><br>").val($scope.$data.name));
                $scope.$line.append($("<input  type='email' class='form-control' disabled><br><br>").val($scope.$data.email));
                $scope.$line.append($("<input  type='text' id='phone' class='form-control' name='phone' disabled>").val($scope.$data.mobile).mask('(999) 999-9999'));
                if ($scope.$data.member == "yes")
                {
                    $scope.$line.append($("<br><br>"));
                    $scope.$line.append($("<input type='radio' class='radio-inline' id='member' name='member' disabled checked>&nbsp;&nbsp;<label>Member</label>&nbsp;<input type='radio' class='radio-inline' id='member' value='no' name='member' disabled>&nbsp;&nbsp;<label>Customer</label><br>").val($scope.$data.member));
                }
                else
                {
                    $scope.$line.append($("<br><br>"));
                    $scope.$line.append($("<input type='radio' class='radio-inline' id='member' name='member' disabled checked>&nbsp;&nbsp;<label>Customer</label>&nbsp;<input type='radio' class='radio-inline' value='yes' id='member' name='member' disabled>&nbsp;&nbsp;<label>Member</label><br>").val($scope.$data.member));
                }
                $scope.$line.append($("<br><a href='#' onclick='view(\"" + $scope.$data.email + "\")'><img src='images/editbtn.png'></a>"));
                $scope.$div.append($scope.$break);

                $scope.$div.append($scope.$header);

                $scope.$div.append($scope.$line);
                $("#aft").after($($scope.$div));
            }
        }
        //$scope.$div1.appendTo(document.body);
    };
});