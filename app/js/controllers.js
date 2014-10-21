'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('ProjectsListCtrl', function($scope) {
  $scope.projects = [
    {name: "FitFriends", id: "1"},
    {name: "SudokuRazy", id: "2"},
    {name: "Dropify", id: "3"},
    {name: "Lorem Overflow", id: "4"}
  ]

  var animateTitle = function() {
    $('.right-curly').animate({'left': '16%'}, 1000);
    $('.left-curly').animate({'right': '16%'}, 1000);
  }

  var fadeInName = function() {
    $('.name').fadeIn(2000)
  }

  var cycleDescription = function() {
    $('.description').text("Full-Stack Web Developer");
    $('.description, .resume, .projects-list').fadeIn(2000);
  }

  $('.name').hide();
  $('.description, .resume, .projects-list').hide();
  setTimeout(animateTitle, 500)
  setTimeout(fadeInName, 1200)
  setTimeout(cycleDescription, 2800)

});

controllers.controller('ProjectsDetailCtrl', function($scope) {
  $scope.name = "Project Details";
});