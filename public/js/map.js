angular.module('tourApp')
    .factory('mapService', ['$window','$q','$rootScope', function($window,$q,$rootScope){
        var deferred = $q.defer();
        $window.getDirections = function(data){
            deferred.resolve(data);
            $rootScope.$apply();
        };
        return deferred.promise;
    }]);


















// L.mapbox.accessToken = 'pk.eyJ1IjoibGdvZC10b20iLCJhIjoiY2lsc2E2Y3Y4MDh4c3R5a245aXg1cHg5eiJ9.JXNc2afO-soiBxL0iHyMFw';
// var map = L.mapbox.map('map', 'lgod-tom.pdn1c00d', {
//     zoomControl: false
// }).setView([42.3322, -83.0463], 15);

// // move the attribution control out of the way
// map.attributionControl.setPosition('bottomleft');

// map.featureLayer.on('click', function(e) {
//         map.panTo(e.layer.getLatLng());
//     });

// // create the initial directions object, from which the layer
// // and inputs will pull data.
// var directions = L.mapbox.directions({
//     profile: 'mapbox.walking'
// });

// var directionsLayer = L.mapbox.directions.layer(directions)
//     .addTo(map);

// var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
//     .addTo(map);

// var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
//     .addTo(map);

// var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
//     .addTo(map);

// var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
//     .addTo(map);

// var geolocate = document.getElementById('geolocate');
//     var myLayer = L.mapbox.featureLayer().addTo(map);
//         if (!navigator.geolocation) {
//             geolocate.innerHTML = 'Geolocation is not available';
//         } else {
//             geolocate.onclick = function (e) {
//                 var options = options || {};
//                     options.accuracy <= 10; //supposed to be accurate to 10 meters
//                     options.timeOut = 15000; // times out after 15 seconds
//                     options.maximumAge = 0; // Force current locations only
//                     options.enableHighAccuracy = true;
//                     navigator.geolocation.getCurrentPosition(success, error, options); //gets current position
//                     geolocate.parentNode.removeChild(geolocate); // hide find me button

// function success(position) {      
//     var lat  = position.coords.latitude,
//         lng = position.coords.longitude,
//         acc = position.coords.accuracy;
//                 map.panTo( [lat,lng] );
//                 map.setZoom( 17 );
//                 directions.setOrigin( L.latLng(lat,lng,acc) ); //sets origin point for Geolocation
// };

//     var error;

//             e.preventDefault();
//             e.stopPropagation();

//         };
   
//     }
// map.on('locationfound', function(e) {
//     map.fitBounds(e.bounds);

//     myLayer.setGeoJSON({
//         type: 'Feature',
//         geometry: {
//             type: 'Point',
//             coordinates: [e.latlng.lng, e.latlng.lat]
//         },
//         properties: {
//             'title': 'Here I am!',
//             'marker-color': '#ff8888',
//             'marker-symbol': 'star'
//         }
//     });
// });
//      