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

$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});