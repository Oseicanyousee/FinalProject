angular.module('tourApp')
	.controller("directControl", function($scope){
		$scope.newPlace = [
			{
				placeImg: "public/images/abandoned-light.jpg",
				placeName: "Cool Lighting"	
			},
			{
				placeImg: "public/images/Abandoned-theater.jpg",
				placeName: "Theater"
			},
			{
				placeImg: "public/images/Abandoned-train-station.jpg",
				placeName: "Train Station"
			},
			{
				placeImg: "public/images/Detroit1.jpg",
				placeName: "The View"
			}
		]
	});