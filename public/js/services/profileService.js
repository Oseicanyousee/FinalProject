angular.module('tourApp')
	.factory('profileService', function(){
		var profileBadges = [];
		return {
			saveBadges: function(){
					if(successCheckIn  === true){
						console.log('pushing image');
						profileBadges.push("public/images/grandcircus.png");
						console.log(profileBadges);
					} else 
						console.log('I didnt work');
						},
			getBadges: function(){
				return profileBadges;
			}		
		}
	});