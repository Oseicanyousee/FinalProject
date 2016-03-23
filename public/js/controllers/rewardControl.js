angular.module('tourApp')
	.controller("rewardControl",['$scope','profileService', function($scope, profileService){
			profileService.addBadge();
			$scope.badge = function(){
			$scope.currentBadge = profileService.getBadge();
				
			}
			// $scope.callToAddBadge = function(currentBadge){
			// 	profileService.addBadge(currentBadge);
			// };
		// $scope.profileBadges = [];

		// $scope.checkInStatus = profileService.getStatus();


		// profileService.getStatus = function($scope){
			
		// 	$scope.profileBadges.push("public/images/grandcircus.png");
		// 	console.log('fucking work!');
		// };

		// $scope.getBadges = function getBadges(){
		// 	$scope.getBadges();
		// 	console.log('reward control is doing something');
		// };
	}]);