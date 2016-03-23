angular.module('tourApp')
	.factory('profileService', function(){
		var profileBadges = [];
		// var badgeAquired = function(badge){
		// 	profileBadges.push(badge);
		// }

		 // var updateBadges = function() {
   //      for (var index = 0; index < profileBadges.length; ++index)
   //          profileBadges[index].badge();
   //  }

		// var checkInStatus = {
		// 	value: true
		// };
		var addBadge = function(newBadge){
			profileBadges = newBadge;
			// updateBadges();
			profileBadges.push(newBadge);
		}
		var getBadge = function(){
			return profileBadges;
		};
		return {
			// badgeAquired: badgeAquired,
			addBadge: addBadge,
			getBadge: getBadge
			};		
	});