var app = angular.module('tourApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: 'public/views/home.html',
    controller: 'indexControl'
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