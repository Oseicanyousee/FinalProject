angular.module('facebookUtilsDemo', ['facebookUtils'])
  .constant('facebookConfigSettings', {
    'appID' : '1035212533189388',
    'routingEnabled': true
  })
 
  .controller('FBController',['$scope','$rootScope',function($scope,$rootScope){
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


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
  // google login function to get profile info