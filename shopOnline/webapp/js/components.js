

app.component('mainButton', {
	
	bindings:{
		text:'@',
		icon:'@',
		url:'@'
	},
	bindToController: true,
	controller: 'mainButtonController',
	
	template:'<button type="button" class="btn btn-default btn-lg" ng-click="clickAction( )">'
	+'  <span class="glyphicon {{$ctrl.icon}}" aria-hidden="true"></span> {{$ctrl.text}}</button>'
});