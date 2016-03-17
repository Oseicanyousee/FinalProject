angular.module('tourApp')
	.factory('adventureService', function(){   
		var currentLocation = '';
		return {
				saveLocation: function(location){
					currentLocation = location;
				},
				getLocation: function(){
					return location;
					console.log(currentPosition);
				} 
		};
	});	
		






					// var currentPosition = navigator.geolocation.getCurrentPosition(function(position){
	   	// 			var lati = angular.element(document.querySelector('#latitude'));
	   	// 				lati.prepend(position.coords.latitude);

	   	// 			var longi = angular.element(document.querySelector('#longitude'));
	   	// 				longi.prepend(position.coords.longitude);
						
					// })	


		// var checkIn = function(){
		// 	var config = {
		// 	    apiKey: '52PP2FEDWRU5ZHWY4OXHWODARKOPT5NXWKW4RSJI3KZPWFLK',
		// 	    authUrl: 'https://foursquare.com/',
		// 	    apiUrl: 'https://api.foursquare.com/'
  // };
		// }

		// var currentLoc = 'https://api.foursquare.com/v2/venues/51c1dbbb7dd2456ebaf67c1c'