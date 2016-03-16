angular.module('app')
  .controller('mapCTRL', ['$scope', function ($scope) {
       $scope.callback = function (map) {
          map.setView([42.3317856, -83.0487986], 16.12);
    };
  }
]);