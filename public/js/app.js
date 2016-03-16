var app = angular.module('tourApp', ['ngRoute']);

app.config(function($routeProvider){
  // $routeProvider.when('/', {
  //   templateUrl: '../index.html',
  //   controller: 'indexControl'
  // });

  $routeProvider.when('/view2', {
    templateUrl: 'public/views/newView.html',
    controller: 'directControl'
  });

  // $routeProvider.when('/view3', {
  // 	templateUrl: 'view3.html',
  // 	controller: 'httpPage'
  // });
});