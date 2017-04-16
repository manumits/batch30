
var app = angular.module('myApp', ['mynewApp','myspecialApp']);

app.controller('myCtrl', function($scope) {
    $scope.firstname = "John"; 
});

app.controller('myCtrl2', function($scope,$rootScope) {
    $scope.firstname = "Ram";  
    $rootScope.lastname = "Doe";   		
});