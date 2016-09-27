

// Modulo principal del s-Shop y router:

var app = angular.module("WebApp", ['ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider.when("/", {
		templateUrl:"templates/index.html"
	})
	
	.when("/sports", {
		title:'Sport Section',
		templateUrl:'templates/sports.html',
		controller:''
	})
	.when("/alimentacion", {
		title:'Sport Section',
		templateUrl:'templates/alimentacion.html',
		controller:''
	})
	.when("/medio", {
		title:'Sport Section',
		templateUrl:'templates/medio.html',
		controller:''
	})
	.when("/ofertas", {
		title:'Sport Section',
		templateUrl:'templates/ofertas.html',
		controller:''
	})
	.when("/papeleria", {
		title:'Sport Section',
		templateUrl:'templates/papeleria.html',
		controller:''
	})
	.otherwise({ redirectTo : "/"});
});
