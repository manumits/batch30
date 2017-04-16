
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.cost=300;
	$scope.taxper=20;
	
	$scope.$watch("cost",function(){
		
		$scope.tax=($scope.cost*$scope.taxper)/100;
	$scope.totalBill=$scope.cost+$scope.tax;

	});
	
	
});

