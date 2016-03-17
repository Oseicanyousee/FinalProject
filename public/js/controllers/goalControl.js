angular.module('tourApp')
	.controller("goalControl",['$scope','adventureService', function($scope, adventureService){
		$scope.saveLocation = function(){
    		var currentPosition = navigator.geolocation.getCurrentPosition(function(position){
	   				var lati = angular.element(document.querySelector('#latitude'));
	   					lati.prepend(position.coords.latitude);

	   				var longi = angular.element(document.querySelector('#longitude'));
	   					longi.prepend(position.coords.longitude);
						
					})
    	}	
	}]);