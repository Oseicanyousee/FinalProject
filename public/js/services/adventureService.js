angular.module('tourApp')
	.factory('adventureService', function(){   
		var currentLocation = {};
		return {
				saveLocation: function(location){
					currentLocation = {
						latitude: location.lati,
						longitude: location.longi
					};
				},
				getLocation: function(){
					return currentLocation;
					console.log(currentPosition);
				} 
		};
	});	
		





