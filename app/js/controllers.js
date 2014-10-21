'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('ProjectsListCtrl', function($scope) {
  $scope.projects = [
    {name: "FitFriends", id: "fitfriends"},
    {name: "SudokuRazy", id: "sudokurazy"},
    {name: "Dropify", id: "dropify"},
    {name: "Lorem Overflow", id: "lorem-overflow"}
  ];

  // var getProject = function(project) {
  //   $http.get('json_files/' + project.id + '.json' ).success(function(data) {

  //   });
  // };

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
  $scope.project = {title: "Fit Friends",
    id: "fitfriends",
    description: "The challenge-based fitness app that transforms exercise from a personal task to social adventure.",
    link: "View Site",
    imageUrl: 'images/fitfriends_mac.png'
  };
});