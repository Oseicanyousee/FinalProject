angular.module('tourApp')
    .controller('mapCTRL', ['$scope', 'adventureService', function ($scope, adventureService) {
        $scope.callback = function (map) {
        map.setView([42.3317856, -83.0487986], 16.12);
        };
        
        $scope.checkIn = function(){
        	console.log('whatever');
	        	var error;
				var options = options || {};
					options.accuracy <= 10; //supposed to be accurate to 10 meters
					options.timeOut = 5000; // times out after 5 seconds
					options.maximumAge = 0; // Force current locations only
					options.enableHighAccuracy = true;
						function success(position) {      
							var cords = {};
							var target = {};
								cords.lng = position.coords.longitude;
								cords.lat  = position.coords.latitude;
								// cords.acc = position.coords.accuracy;
								target.lng = -83.049747;
								target.lat = 42.335963;

								if(Math.abs(cords.lat - target.lat) <= 0.0005 && (Math.abs(cords.lng - target.lng)<= 0.0005)){
									alert('You have checked In!!');
									console.log(target);
									console.log(cords);
								} else {
									alert('you have not checked in');
								}
        // 							console.log(currentLocation);
						        	// if (cords === target){
						        	// 	alert('You have checked In!!');
						        	// 	console.log(cords);
						        	// } else { 
						        	// 	console.log(cords);
						        	// 	console.log(target);
						        	// 	alert('You not there yet');
						        	// }		

						};
        		navigator.geolocation.getCurrentPosition(success, error, options);
        }; 	
  }]);

    
// angular.module("tourApp")
//    .controller("mapCTRL", [ "$scope", function($scope) {
// 'use strict';

// $scope.$on('$viewContentLoaded', function() {
//             mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW4td3lzcyIsImEiOiJVcm5FdEw4In0.S8HRIEq8NqdtFVz2-BwQog';

//             $scope.map = new mapboxgl.Map({
//                 container: 'map', // container id
//                 style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
//                 center: [42.3317856, -83.0487986], // starting position
//                 zoom: 10, // starting zoom,
//                 interactive: true
//             });
//             $scope.map.on('style.load', function(){
//                 $scope.map.addSource("tom",{
//                     "type": "geojson",
//                     "data": 'https://api.myjson.com/bins/m3af'
//                 });
//             });
//         });
   

//             $scope.map = new mapboxgl.Map({
//                 container: 'map', // container id
//                 style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
//                 center: [42.3317856, -83.0487986], // starting position
//                 zoom: 10, // starting zoom,
//                 interactive: true
//             });
//             $scope.map.on('style.load', function(){
//                 $scope.map.addSource("tom",{
//                     "type": "geojson",
//                     "data": 'https://api.myjson.com/bins/m3af'
//                 });
//             });
//         });
// }]);

