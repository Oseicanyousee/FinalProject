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
<<<<<<< HEAD
		var getBadge = function(){
			return profileBadges;
		};
		return {
			// badgeAquired: badgeAquired,
			addBadge: addBadge,
			getBadge: getBadge
			};		
	});
=======
	});

$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});
>>>>>>> db3e5e4e64664cca571cd169aa952021422d7147
