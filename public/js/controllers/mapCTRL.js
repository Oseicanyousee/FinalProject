angular.module('tourApp')
    .controller('mapCTRL', ['$scope', 'adventureService', function ($scope, adventureService) {
        $scope.callback = function (map) {
        map.setView([42.3317856, -83.0487986], 16.12);
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
// }]);

