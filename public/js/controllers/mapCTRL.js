angular.module('tourApp')
	.controller('mapCTRL', ['$scope', 'adventureService', function ($scope, adventureService) {
    	$scope.callback = function (map) {
    	map.setView([42.3317856, -83.0487986], 16.12);
    	};
    }]);
