angular.module('tourApp')
	.directive('selfieMap', function(){
		return {
			restrict: "E",
			templateUrl: "public/js/directive/myQuest.html",
			replace: true,
			link: function(scope, element, attrs){
				element.css(
					{
						display: 'inline'
					}
				);
			}
		};
	});
