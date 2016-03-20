<<<<<<< HEAD
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
=======
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


// angular.module('tourApp')
// 	.directive('selfieMap', function(){
// 		return {
// 			restrict: "E",
// 			templateUrl: "public/js/directive/myQuest.html",
// 			// template:'<h1>hi mom</h1>',
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
	.directive('mapbox', [function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        callback: "="
      },
      template: '<div></div>',
      link: function (scope, element, attributes) {
        L.mapbox.accessToken = 'pk.eyJ1IjoibGdvZC10b20iLCJhIjoiY2lsc2E2Y3Y4MDh4c3R5a245aXg1cHg5eiJ9.JXNc2afO-soiBxL0iHyMFw';
        var map = L.mapbox.map(element[0], 'lgod-tom.pdn1c00d');
        scope.callback(map);
      }
    };
  }
]);
>>>>>>> f77b31fc2520aba45bb3631fd154a5a6bbf09d3d
