var app = angular.module('tourApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'view1.html',
    controller: 'inputCTRL'
  });

  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'madLibResult'
  });

  $routeProvider.when('/view3', {
  	templateUrl: 'view3.html',
  	controller: 'httpPage'
  });
});