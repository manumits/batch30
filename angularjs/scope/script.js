var hand=angular.module("demoApp",[]);
hand.controller("navbarCtrl",function($scope){
	$scope.v=20;
	$scope.$watch("v",function(){
		$scope.v2=$scope.v+20;		
	});
	
	document.getElementById("ch").addEventListener("click",function(){
		$scope.r=Math.random();
		$scope.$digest();
	});
		
	
});