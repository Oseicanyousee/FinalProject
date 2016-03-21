angular.module('tourApp')
    .controller('mapCTRL', ['$scope', 'adventureService', function ($scope, adventureService) {
        $scope.callback = function (map) {
        map.setView([42.3317856, -83.0487986], 16.12);
        };
        
        $scope.checkIn = function(){
        	 var currentLocation = function(){
	        	var error;
				var options = options || {};
					options.accuracy <= 10; //supposed to be accurate to 10 meters
					options.timeOut = 5000; // times out after 15 seconds
					options.maximumAge = 0; // Force current locations only
					options.enableHighAccuracy = true;
						function success(position) {      
							var lat  = position.coords.latitude,
								lng = position.coords.longitude,
								acc = position.coords.accuracy;
						};
        		navigator.geolocation.getCurrentPosition(success, error, options);
	        };	
        	if ($scope.checkIn === (-83.049747, 42.335963)){
        		alert('You have checked In!!');
        		console.log(checkIn());
        	} else { 
        		console.log();
        		alert('You not there yet');
        	}		
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

