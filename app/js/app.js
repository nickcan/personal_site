'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'projectAnimations',
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

var projectAnimations = angular.module('projectAnimations', ['ngAnimate']);

projectAnimations.animation('.project', function() {

  var fadeInProject = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      opacity: 0
    });

    jQuery(element).animate({
      opacity: 1
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  var fadeOutProject = function(element, className, done) {
    if(className == 'active') {
      return;
    }
    element.css({
      opacity: 1
    });

    jQuery(element).animate({
      opacity: 0
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  return {
    addClass: fadeInProject,
    removeClass: fadeOutProject
  };
});