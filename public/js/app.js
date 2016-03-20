var app = angular.module('tourApp', ['ngRoute','facebookUtils']);

app.config(function($routeProvider){


  $routeProvider.when('/', {
    templateUrl: 'public/views/login.html',
    controller: 'FBController'
  });

  $routeProvider.when('/view2', {
    templateUrl: 'public/views/adventureList.html',
    controller: 'directControl'
  });

  $routeProvider.when('/view3', {
  	templateUrl: 'public/views/adventureDetail.html',
  	controller: 'mapCTRL'
  });

  $routeProvider.when('/view4', {
    templateUrl: 'public/views/routeGoal.html',
    controller: 'goalControl'
  });

  $routeProvider.when('/view5', {
    templateUrl: 'public/views/reward.html',
    controller: 'rewardControl'
  });
});