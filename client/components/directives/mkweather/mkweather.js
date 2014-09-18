/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('mkWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function conditions(zip){
      return $http.jsonp('http://api.wunderground.com/api/d400acb7c08a6ba9/conditions/q/' + zip + '.json?callback=JSON_CALLBACK');
    }

    return {conditions:conditions};
  }])
  .directive('mkWeather', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/mkweather/mkweather.html';
    o.scope       = {zip:'@'};
    o.link        = function(scope, element, attrs){
                      };
    o.controller  = ['$scope', 'WeatherApi', function($scope, WeatherApi){
                        WeatherApi.conditions($scope.zip).then(function(response){
                          $scope.weather = response.data.current_observation.temp_f;
                      });
                    }];
    return o;
  }]);
})();
