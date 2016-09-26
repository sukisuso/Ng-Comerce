

app.component('mainButton', {
	
	bindings:{
		text:'@',
		icon:'@'
	},
	controller: [function () {
      this.changePassword = function ($scope,$location) {
		  debugger
		  $location.url("templates/remove.html");
      };
   }],
	
	template:'<button type="button" class="btn btn-default btn-lg" ng-click="$ctrl.changePassword()">'
	+'  <span class="glyphicon {{$ctrl.icon}}" aria-hidden="true"></span> {{$ctrl.text}}</button>'
});