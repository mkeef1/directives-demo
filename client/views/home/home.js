(function(){
  'use strict';

  angular.module('dir-demo')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.people = [{name:'Bob', age:'25'}, {name:'Matt', age:'30'}];
    $scope.symbols = ['AAPL', 'GOOG', 'AMZN'];
    $scope.zips = ['37069'];
  }]);
})();

