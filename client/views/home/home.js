(function(){
  'use strict';

  angular.module('dir-demo')
  .controller('HomeCtrl', ['$scope', 'Home', 'Movie', function($scope, Home, Movie){
    $scope.people = [{name:'Bob', age:'25'}, {name:'Matt', age:'30'}];
    $scope.symbols = ['AAPL', 'GOOG', 'AMZN'];
    $scope.zips = ['37069'];
    $scope.titles = ['Toy Story', 'Rocky', 'Evil Dead'];

    $scope.delMovie = function(index){
      $scope.titles.splice(index, 1);
    };

    $scope.addMovie = function(){
      $scope.titles.push($scope.title);
      $scope.title = null;
    };
  }]);
})();

