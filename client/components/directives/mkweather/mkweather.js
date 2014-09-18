/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('mkWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function conditions(query){
      return $http.jsonp('http://api.wunderground.com/api/d400acb7c08a6ba9/conditions/q/' + query + '.json?callback=JSON_CALLBACK');
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

                        $scope.$on('position', function(event, pos){
                          if($scope.zip){return;}

                          console.log('i am weather', pos);
                          var query = pos.coords.latitude + ',' + pos.coords.longitude;
                          console.log(query);
                          weather(query);
                        });

                        function weather(query){
                          WeatherApi.conditions(query).then(function(response){
                            $scope.weather = response.data.current_observation.temp_f;
                            $scope.icon = response.data.current_observation.icon_url;
                          });
                        }
                        if($scope.zip){weather($scope.zip);}
                    }];
    return o;
  }]);
})();
