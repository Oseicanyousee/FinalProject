var app = angular.module('tourApp', ['ngRoute']);

app.config(function($routeProvider){
<<<<<<< HEAD
   $routeProvider.when('/', {
     templateUrl: 'public/views/home.html',
     controller: 'indexControl'
   });
=======
  $routeProvider.when('/', {
    templateUrl: 'public/views/home.html',
    controller: 'indexControl'
  });
>>>>>>> 75185a01e72ceb47ea3d4c9e449e4beba95da416

  $routeProvider.when('/view2', {
    templateUrl: 'public/views/adventureList.html',
    controller: 'directControl'
  });

  $routeProvider.when('/view3', {
  	templateUrl: 'public/views/adventureDetail.html',
  	controller: 'detailsControl'
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