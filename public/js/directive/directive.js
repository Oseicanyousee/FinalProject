// angular.module('tourApp')
// 	.directive('selfieMap', function(){
// 		return {
// 			restrict: "E",
// 			templateUrl: "public/js/directive/myQuest.html",
// 			replace: true,
// 			link: function(scope, element, attrs){
// 				element.css(
// 					{
// 						display: 'inline'
// 					}
// 				);
// 			}
// 		};
// 	});
angular.module('tourApp')
	.directive('selfieMap', function(){
		return {
			restrict: "E",
			templateUrl: "public/js/directive/myQuest.html",
			// template:'<h1>hi mom</h1>',
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
