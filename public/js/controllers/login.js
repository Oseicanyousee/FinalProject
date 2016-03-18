var app1 = angular.module('facebookUtilsDemo', ['facebookUtils'])
  .constant('facebookConfigSettings', {
    'appID' : '1035212533189388',
    'routingEnabled': true
  })

  .controller('facebookLogin',['$scope','$rootScope',function($scope,$rootScope){
    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          $rootScope.loggedInUser = response;
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};

      });
    });
  }]);