var app = angular.module('MyApp',[]);
app.controller( 'MainCtrl' , function( $scope ) {
    localStorage["data"] = localStorage.getItem('person');
    //data from session storage of browser
    $scope.obj = JSON.parse( localStorage["data"]);
    var names = obj.map(function (user) {
        return user.name;
    });

    var text = "";
    var i;
    for (i = 0; i < names.length; i++) {
        text += names[i] + "<br>";
    }


    $scope.addItem = function( item ) {
        if ( !_.contains( text , item.title ) ){
            text.push( item.title );
        }
        $scope.item = {};
    }
});