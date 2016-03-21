angular.module('tourApp')
	.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });


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
