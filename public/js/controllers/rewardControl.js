angular.module('tourApp')
	.controller("rewardControl",['$scope','profileService', function($scope, profileService){
		$scope.getBadges = getBadges();
	}]);