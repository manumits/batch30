var hand=angular.module("demoApp",[]);
hand.controller("navbarCtrl",function($scope){
	
	$scope.nav_items=[{item:"Home",url:"home.html"},{item:"AboutUs",url:"about.html"},{item:"ContactUs",url:"contact.html"},{item:"Services",url:"services.html"}]
});