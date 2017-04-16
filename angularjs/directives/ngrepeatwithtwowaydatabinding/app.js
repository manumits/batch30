
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
		$scope.l="";
    $scope.leaders=["Ghandi","Nehru","lalaji"];
		
		$scope.heroines=[{name:"Aishwarya",age:"40",husband:"abhishek","image_url":"http://media2.intoday.in/indiatoday/images/stories/abhishek-aishwarya-story_647_061516123927.jpg"},{name:"Kareena",age:"37",husband:"Saif","image_url":""},{name:"Jaya",age:"71",husband:"Amitab","image_url":""}]
		
		$scope.addLeader=function(){
			$scope.leaders.push($scope.l);
			console.log("jj");
		};
		
});
