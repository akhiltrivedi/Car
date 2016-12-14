<!DOCTYPE html>
<html>
<head>
<base href="http://demos.telerik.com/kendo-ui/autocomplete/angular">
    <style>html { font-size: 14px; font-family: Arial, Helvetica, sans-serif; }</style>
<title></title>
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2016.1.112/styles/kendo.common-material.min.css" />
    <link rel="stylesheet" href="//kendo.cdn.telerik.com/2016.1.112/styles/kendo.material.min.css" />

    <script src="//kendo.cdn.telerik.com/2016.1.112/js/jquery.min.js"></script>
    <script src="//kendo.cdn.telerik.com/2016.1.112/js/angular.min.js"></script>
    <script src="//kendo.cdn.telerik.com/2016.1.112/js/kendo.all.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.10/ngStorage.min.js"></script>
    </head>
    <body>
    <div id="example" ng-app="KendoDemos">
    <div class="demo-section k-content" ng-controller="MyCtrl">
    <h4>Select Country /e.g. Armenia/</h4>
<input kendo-auto-complete ng-model="country" k-data-source="countryNames" style="width: 100%;" />
    <p class="demo-hint">Your selection: {{ country }}</p>
</div>
</div>

<script>
angular.module("KendoDemos", [ "kendo.directives" ])
    .controller("MyCtrl", function($scope){
        $scope.obj = JSON.parse( localStorage.getItem("person"));

        $scope.countryNames = $scope.obj[1].name;
    })
</script>


</body>
</html>
