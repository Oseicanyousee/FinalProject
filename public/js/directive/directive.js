angular.module('tourApp')
	.directive('selfieMap', function(){
		return {
			restrict: "E",
			templateUrl: "../myQuest.html",
			replace: false,
			link: function(scope, element, attrs){
				element.css(
					{
						width: '200px',
						height: '200px',
						border: '2px solid green'
					}
				);
			}
		};
	});