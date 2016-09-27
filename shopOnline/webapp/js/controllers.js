

app.controller("mainController", function mainController ($scope, $location){
	
	$scope.title = "e-Shop!";
	$scope.menus = [{name:'Deporte', icon:'glyphicon-sunglasses', url:'/sports'}, 
					{name:'Alimentacion', icon:'glyphicon-apple', url:'/alimentacion'},
				    {name:'Papeleria', icon:'glyphicon-scissors', url:'/papeleria'},
					{name:'Medio', icon:'glyphicon-leaf', url:'/medio'},
				    {name:'Ofertas', icon:'glyphicon-euro', url:'/ofertas'}];
	
});

app.controller('mainButtonController', ['$scope', '$location',function($scope, $location) {
	
		$scope.clickAction = function (view) {
			$location.url($scope.$ctrl.url);
		}
}]);