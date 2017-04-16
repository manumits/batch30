
var app = angular.module('myApp', ['ngSanitize']);

app.controller('myCtrl', function($scope) {
    $scope.marks=["Ghandi","Nehru","lalaji"];
		
		$scope.cricketers=[{name:"Sachin",age:"45"},{name:"Yuvi",age:"35"},{name:"Dhoni",age:"36"},{name:"Kohli",age:"26"}];
		
		$scope.text1="<i>Hello Shashank</i>";
});
