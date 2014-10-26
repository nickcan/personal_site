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

  var fadeInName = function() {
    $('.name').fadeIn(2000)
  }

  var moveCurliesOut = function() {
    $('.left-curly').animate({'margin-right': '3vw'}, 1000)
    $('.right-curly').animate({'margin-left': '3vw'}, 1000)
  }

  var moveCurliesIn = function() {
    $('.left-curly').animate({'margin-right': '1vw'}, 1000)
    $('.right-curly').animate({'margin-left': '1vw'}, 1000)
  }

  setInterval(function() {
    moveCurliesOut();
    moveCurliesIn();
  })

  $('.jumbotron').removeClass('blur')
}]);

controllers.controller('ProjectsDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

  $('.jumbotron').addClass('blur');

  $http.get('json_files/' + $routeParams.projectId + '.json' ).success(function(data) {
    $scope.project = data;
  });
}]);