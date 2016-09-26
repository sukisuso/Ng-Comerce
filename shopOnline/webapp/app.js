

// Modulo principal del s-Shop y router:

var app = angular.module("WebApp", ['ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider.when("/", {
		templateUrl:"templates/index.html"
	})
	
	.when("/sport", {
		title:'Sport Section',
		templateUrl:'templates/sport.html',
		controller:''
	})
	
	.otherwise({ redirectTo : "/"});
});