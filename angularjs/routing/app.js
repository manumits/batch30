var hand=angular.module("SPAlayout",['ngRoute']);
hand.config(function($routeProvider){
	
	$routeProvider
	.when("/",{
		template:"<h1>Home Route</h1>"
	})
	.when("/aboutus",{
		template:"<h1>About us</h1>"
	})
	.when("/contactus",{
		template:"<h1>contact us</h1>"
	})
	.when("/meetus",{
		templateUrl:"http://localhost/up.html"
	})
});