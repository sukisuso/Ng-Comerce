

app.controller("mainController", function mainController ($scope){
	
	$scope.title = "e-Shop!";
	$scope.menus = [{name:'Deporte', icon:'glyphicon-sunglasses'}, {name:'Alimentacion', icon:'glyphicon-apple'},
				   {name:'Papeleria', icon:'glyphicon-scissors'},{name:'Medio', icon:'glyphicon-leaf'},
				   {name:'Ofertas', icon:'glyphicon-euro'}];
});