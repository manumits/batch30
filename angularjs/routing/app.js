
var app = angular.module('myApp', ['ngRoute']);

app.controller('serCtrl', function($scope) {
   	$scope.s="Manumits Services"
});

app.controller('abtCtrl', function($scope) {
   	$scope.a="About Manumits"
});

app.controller('defaultCtrl', function($scope) {
   	$scope.d="default Page"
});

app.config(function($routeProvider) {
    $routeProvider  
		.when("/",{
			templateUrl: "home.html"
		})
    .when("/services", {
        templateUrl : "services.html",
				controller:"serCtrl"
    })
    .when("/about", {
        templateUrl : "about.html",
				controller:"abtCtrl"
    })
		.when("/oo", {
        template:`<h1>My contact Page!!!!!!!!!!!</h1>`
    })
		.otherwise({
			templateUrl:"default.html",
			controller:"defaultCtrl"
		})
});
