angular.module('tourApp')
    .controller('mapCTRL', ['$scope', 'adventureService', 'mapService', function ($scope, adventureService, mapService) {
               var target = {};
               target.lng = -83.049911;
				target.lat = 42.335706;

               $scope.showModal = false;
             $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
         };  

        $scope.callback = function (map) {
        map.setView([42.3317856, -83.0487986], 16.12);
        };
        
        $scope.checkIn = function(){

			mapService.then(function(data){
				console.log(data);
			});
	        	var error;
				var options = options || {};
					options.accuracy <= 10; //supposed to be accurate to 10 meters
					options.timeOut = 5000; // times out after 5 seconds
					options.maximumAge = 0; // Force current locations only
					options.enableHighAccuracy = true;
						function success(position) {      
							var cords = {};
							// var target = {};
								cords.lng = position.coords.longitude;
								cords.lat  = position.coords.latitude;
								// cords.acc = position.coords.accuracy;
								// target.lng = -83.049911;
								// target.lat = 42.335706;

								if(Math.abs(cords.lat - target.lat) <= 0.0005 && (Math.abs(cords.lng - target.lng)<= 0.0005)){
    								console.log('i am working');
    								console.log(cords);
    								console.log(target);
    									target.lng = -83.049911;
										target.lat = 45.335706;
    								alert('You are checked in!!')	
    								// return toggleModal;
								} else {
									alert('you have not checked in');
									console.log(cords);
								}
      						};
        		navigator.geolocation.getCurrentPosition(success, error, options);
        }; 	
  }]);

    

