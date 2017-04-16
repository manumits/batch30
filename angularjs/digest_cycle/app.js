
var app = angular.module('myApp', ['ngSanitize']);

app.controller('myCtrl', function($scope) {
  $scope.var1=10;
	$scope.$watch("var1",function(){
		$scope.var2=$scope.var1+20;
	});
	document.getElementById("button1").addEventListener("click",function(){
		console.log("OK i'm clicked");
		$scope.ra=Math.random();
		$scope.$digest();
	});
});
