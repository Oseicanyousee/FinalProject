// angular.module("tourApp");
//    .controller("mapCTRL", [ "$scope", "$http", "leafletData", function($scope, $http, leafletData) {
//             angular.extend($scope, {
//                 downtown: {
//                     lat: -83.0487986,
//                     lng: 42.3317856,
//                     zoom: 16.12
//                 },
//                 tiles: {
//                     name: 'Adventure Time',
//                     url: 'https://a.tiles.mapbox.com/v4/lgod-tom.pdn1c00d/page.html?access_token=pk.eyJ1IjoibGdvZC10b20iLCJhIjoiY2lsc2E2Y3Y4MDh4c3R5a245aXg1cHg5eiJ9.JXNc2afO-soiBxL0iHyMFw#16/42.3314/-83.0462',
//                     type: 'features',
//                     options: {
//                         apikey:'pk.eyJ1IjoibGdvZC10b20iLCJhIjoiY2lsc2E2Y3Y4MDh4c3R5a245aXg1cHg5eiJ9.JXNc2afO-soiBxL0iHyMFw',
//                         mapid:'lgod-tom.pdn1c00d'
//                     }
//                 },
//                 geojson: {"map.geojson"}
//             });
//             $http.get("https://a.tiles.mapbox.com/v4/lgod-tom.pdn1c00d/features.json?access_token=pk.eyJ1IjoibGdvZC10b20iLCJhIjoiY2lsc2E2Y3Y4MDh4c3R5a245aXg1cHg5eiJ9.JXNc2afO-soiBxL0iHyMFw").success(function(data) {
//                 $scope.geojson.data = data;
//             });

//         }]);



