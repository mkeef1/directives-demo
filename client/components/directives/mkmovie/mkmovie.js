(function(){
  'use strict';

  angular.module('mkMovieModule', [])
  .factory('MovieApi', ['$http', function($http){
    function poster(id){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '.json?apikey=qwe4dxymhkgvzd4ysprdtsv7&callback=JSON_CALLBACK');
    }

    return {poster:poster};
  }])
  .directive('mkMovie', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/mkmovie/mkmovie.html';
    o.scope       = {id:'@'};
    o.link        = function(scope, element, attrs){
                      };
    o.controller  = ['$scope', 'MovieApi', function($scope, MovieApi){
                        MovieApi.poster($scope.id).then(function(response){
                          $scope.id = response.data.posters.detailed.replace(/_tmb/, '_pos');
                      });
                    }];
    return o;
  }]);
})();
