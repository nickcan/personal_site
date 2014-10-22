'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('ProjectsListCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {

  $scope.projects = [
    {name: "FitFriends", id: "fitfriends"},
    {name: "SudokuRazy", id: "sudokurazy"},
    {name: "Dropify", id: "dropify"},
    {name: "Lorem Overflow", id: "lorem-overflow"}
  ];

  var animateTitle = function() {
    $('.right-curly').animate({'left': '16%'}, 1000);
    $('.left-curly').animate({'right': '16%'}, 1000);
  }

  var fadeInName = function() {
    $('.name').fadeIn(2000)
  }

  var cycleDescription = function() {
    $('.description').text("Full-Stack Web Developer");
    $('.description, .resume, .projects-list, .arrows-link').fadeIn(2000);
    $('.description').addClass('rel')
  }

  var toggleArrowTitle = function() {
    $('.arw-container').hover(function() {
      $('.arrow-title').fadeToggle(500)
    })
  }

  var pulseArrows = function() {
    $('.arrows').fadeToggle(400)
  }

  $('.arrows-link').click(function() {
    $('.jumbotron').addClass('blur');
  });

  $('.header-title').click(function() {
    $('.jumbotron').removeClass('blur')
  })

  $('.name').hide();
  $('.description, .resume, .projects-list, .arrows-link, .arrow-title').hide();
  setTimeout(animateTitle, 500)
  setTimeout(fadeInName, 1200)
  setTimeout(cycleDescription, 2800)
  setInterval(pulseArrows, 3000)
  toggleArrowTitle();
}]);

controllers.controller('ProjectsDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

  $http.get('json_files/' + $routeParams.projectId + '.json' ).success(function(data) {
    $scope.project = data;
  });
}]);