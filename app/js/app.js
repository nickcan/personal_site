'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'controllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsListCtrl'
    }).
    when('/projects/:projectId', {
      templateUrl: 'partials/projects-details.html',
      controller: 'ProjectsDetailCtrl'
    }).
    otherwise({
      redirectTo: '/projects'
    });
}]);
